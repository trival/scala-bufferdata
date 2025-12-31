# Raytracer Implementation with BufferData Structs and Typeclass Pattern

## Overview

Implement a high-performance path tracing raytracer using bufferdata structs, equivalent to the TypeScript implementation in `web/ray-tracer-ts`, using the typeclass pattern for Hittable abstraction. **Performance goal: Match or exceed TypeScript version (~25s baseline).**

## User Requirements (Confirmed)

1. ✅ Everything as structs (Ray, Hit, Sphere, Material data)
2. ✅ Hit struct with single buffer reuse to avoid repeated allocations
3. ✅ Both Lambertian and Metal materials
4. ✅ Hittable typeclass generic over IterableOnce
5. ✅ Material type field inside MaterialSchema (not object schema)
6. ✅ Hit uses nested MaterialSchema (not flattened)
7. ✅ Use new given syntax from SIP
8. ✅ Add reflect() method to vector.scala
9. ✅ Performance target: Match or exceed ~25s TypeScript baseline

## Architecture Design Decisions

### 1. Material Schema with Type Field ✅

**Decision: Type field inside MaterialSchema**

```scala
type MaterialSchema = (U8, Vec3dSchema, F64)  // type, color, fuzz
type SphereSchema = (Vec3dSchema, F64, MaterialSchema)
//                   center       radius material

object MaterialType:
  inline val Lambertian: Short = 0
  inline val Metal: Short = 1
```

**Rationale:**

- Material type is part of material data, not object data
- Cleaner separation of concerns
- Material struct is self-contained and reusable
- Only 1 byte overhead per material
- Fast integer comparison in hot path
- Extensible for future materials

### 2. Nested Material in Hit (Not Flattened) ✅

**Decision: Hit contains MaterialSchema as nested struct**

```scala
type HitSchema = (F64, Vec3dSchema, Vec3dSchema, U8, MaterialSchema)
//                t    pos         normal       frontFace material

// Nested access:
hit.material.materialType()
hit.material.color.r()
hit.material.fuzz()
```

**Rationale:**

- Nested structs are flattened at compile time anyway (zero cost)
- Better conceptual model - Hit contains a Material
- Cleaner API - `hit.material` instead of separate fields
- Easier to add new material properties later

### 3. Hit Buffer Reuse Pattern ✅

**Decision: Boolean return with mutable Hit buffer**

```scala
trait Hittable[T]:
  def rayHit(obj: T, ray: Ray, minT: Double, maxT: Double, hitBuffer: Hit): Boolean
```

**Rationale:**

- Zero allocations in hot path (vs millions with Option[Hit])
- Caller owns and reuses single Hit buffer across entire render
- Clear semantics: `if rayHit(...) then useHitData()`
- ~10x reduction in GC pressure vs TypeScript version

### 4. Hittable Typeclass with New Syntax ✅

**Decision: Use SIP typeclass syntax**

```scala
trait Hittable[T]:
  def rayHit(obj: T, ray: Ray, minT: Double, maxT: Double, hitBuffer: Hit): Boolean

given Hittable[Sphere]:
  def rayHit(...) = ...

given [T: Hittable] => Hittable[IterableOnce[T]]:
  def rayHit(...) = ...
```

**Rationale:**

- Cleaner syntax per Scala 3 SIP
- More readable than `with` syntax
- Clear intent: "given a Hittable for Sphere..."
- Context bounds syntax `[T: Hittable]` with `=>` for dependent givens

### 5. Complete Type Schemas ✅

```scala
// Ray: 48 bytes
type RaySchema = (Vec3dSchema, Vec3dSchema)  // origin, direction

// Material: 33 bytes (flattened: U8 + Vec3dSchema + F64)
type MaterialSchema = (U8, Vec3dSchema, F64)  // type, color, fuzz

// Sphere: 81 bytes (flattened: Vec3dSchema + F64 + MaterialSchema)
type SphereSchema = (Vec3dSchema, F64, MaterialSchema)
//                   center       radius material

// Hit: 90 bytes (flattened: F64 + Vec3dSchema + Vec3dSchema + U8 + MaterialSchema)
type HitSchema = (F64, Vec3dSchema, Vec3dSchema, U8, MaterialSchema)
//                t    pos         normal       frontFace material
```

**Memory Layout (compile-time flattened):**

- Ray: 48 bytes (Vec3 + Vec3 = 24 + 24)
- Material: 33 bytes (1 + 24 + 8)
- Sphere: 81 bytes (24 + 8 + 33 + 16 padding)
- Hit: 90 bytes (8 + 24 + 24 + 1 + 33)

## Implementation Plan

### Phase 1: Vector Extensions (30 mins)

**File: `src/raytracer/vector.scala`**

Add two critical methods:

```scala
extension (v: Vec3d)
  // Reflect vector around normal: v - 2 * dot(v, n) * n
  inline def reflect(n: Vec3d, target: Vec3d): Unit =
    val d = v.dot(n) * 2.0
    n.mul(d, target)
    v.sub(target, target)

  // Copy vector to target buffer
  inline def copyTo(target: Vec3d): Unit =
    target.x := v.x()
    target.y := v.y()
    target.z := v.z()
```

### Phase 2: Core Structs (2 hours)

#### File: `src/raytracer/ray.scala`

```scala
package raytracer.ray

import bufferdata.*
import raytracer.vector.*

type RaySchema = (Vec3dSchema, Vec3dSchema)

val RayStruct = struct[RaySchema]

type Ray = StructRef[RaySchema]

object Ray:
  inline def apply(): Ray = RayStruct()

  inline def apply(origin: Vec3d, direction: Vec3d): Ray =
    val r = Ray()
    origin.copyTo(r.origin)
    direction.copyTo(r.direction)
    r

extension (ray: Ray)
  inline def origin = ray(0)
  inline def direction = ray(1)

  inline def at(t: Double, target: Vec3d): Unit =
    ray.direction.mul(t, target)
    target =+ ray.origin

  inline def copyFrom(other: Ray): Unit =
    other.origin.copyTo(ray.origin)
    other.direction.copyTo(ray.direction)
```

#### File: `src/raytracer/material.scala`

```scala
package raytracer.material

import bufferdata.*
import raytracer.vector.*

// Material schema: type field is INSIDE material
type MaterialSchema = (U8, Vec3dSchema, F64)

val MaterialStruct = struct[MaterialSchema]

type Material = StructRef[MaterialSchema]

object MaterialType:
  inline val Lambertian: Short = 0
  inline val Metal: Short = 1

object Material:
  inline def apply(): Material = MaterialStruct()

  inline def apply(materialType: Short, color: Vec3d, fuzz: Double): Material =
    val m = Material()
    m.materialType := materialType
    color.copyTo(m.color)
    m.fuzz := fuzz
    m

extension (m: Material)
  inline def materialType = m(0)
  inline def color = m(1)
  inline def fuzz = m(2)

  inline def copyTo(target: Material): Unit =
    target.materialType := m.materialType()
    m.color.copyTo(target.color)
    target.fuzz := m.fuzz()
```

#### File: `src/raytracer/sphere.scala`

```scala
package raytracer.sphere

import bufferdata.*
import raytracer.vector.*
import raytracer.material.*

type SphereSchema = (Vec3dSchema, F64, MaterialSchema)

val SphereStruct = struct[SphereSchema]

type Sphere = StructRef[SphereSchema]

object Sphere:
  inline def apply(): Sphere = SphereStruct()

  inline def apply(
    center: Vec3d,
    radius: Double,
    materialType: Short,
    color: Vec3d,
    fuzz: Double = 0.0
  ): Sphere =
    val s = Sphere()
    center.copyTo(s.center)
    s.radius := radius
    s.material.materialType := materialType
    color.copyTo(s.material.color)
    s.material.fuzz := fuzz
    s

extension (s: Sphere)
  inline def center = s(0)
  inline def radius = s(1)
  inline def material = s(2)  // Returns Material (nested struct)
```

#### File: `src/raytracer/hit.scala`

```scala
package raytracer.hit

import bufferdata.*
import raytracer.vector.*
import raytracer.material.*

// Hit with nested MaterialSchema (not flattened in source)
type HitSchema = (F64, Vec3dSchema, Vec3dSchema, U8, MaterialSchema)

val HitStruct = struct[HitSchema]

type Hit = StructRef[HitSchema]

extension (h: Hit)
  inline def t = h(0)
  inline def pos = h(1)
  inline def normal = h(2)
  inline def frontFace = h(3)
  inline def material = h(4)  // Returns Material (nested struct)

  def copyFrom(other: Hit): Unit =
    h.t := other.t()
    other.pos.copyTo(h.pos)
    other.normal.copyTo(h.normal)
    h.frontFace := other.frontFace()
    other.material.copyTo(h.material)
```

### Phase 3: Hittable Typeclass (3 hours)

**File: `src/raytracer/hittable.scala`**

Using new SIP typeclass syntax:

```scala
package raytracer.hittable

import bufferdata.*
import raytracer.vector.*
import raytracer.ray.*
import raytracer.hit.*
import raytracer.sphere.*
import raytracer.material.MaterialType

trait Hittable[T]:
  def rayHit(obj: T, ray: Ray, minT: Double, maxT: Double, hitBuffer: Hit): Boolean

def rayHit[T: Hittable](obj: T, ray: Ray, minT: Double, maxT: Double, hit: Hit): Boolean =
  summon[Hittable[T]].rayHit(obj, ray, minT, maxT, hit)

// Sphere intersection using new given syntax (no "with")
given Hittable[Sphere]:
  def rayHit(sphere: Sphere, ray: Ray, minT: Double, maxT: Double, hit: Hit): Boolean =
    // Solve: |ray.at(t) - center|² = radius²
    val oc = ray.origin - sphere.center
    val a = ray.direction.lengthSquared
    val halfB = oc.dot(ray.direction)
    val c = oc.lengthSquared - sphere.radius() * sphere.radius()
    val discriminant = halfB * halfB - a * c

    if discriminant < 0 then return false

    // Find nearest root in [minT, maxT]
    val sqrtD = Math.sqrt(discriminant)
    var root = (-halfB - sqrtD) / a
    if root < minT || root > maxT then
      root = (-halfB + sqrtD) / a
      if root < minT || root > maxT then return false

    // Populate hit buffer
    hit.t := root
    ray.at(root, hit.pos)

    // Calculate normal and front face
    val outwardNormal = (hit.pos - sphere.center) / sphere.radius()
    val frontFace = ray.direction.dot(outwardNormal) < 0
    hit.frontFace := (if frontFace then 1 else 0).toShort

    if frontFace then
      outwardNormal.copyTo(hit.normal)
    else
      (-outwardNormal).copyTo(hit.normal)

    // Copy material data (nested struct)
    sphere.material.copyTo(hit.material)

    true

// Generic collection support using new => syntax for context bounds
given [T: Hittable] => Hittable[IterableOnce[T]]:
  def rayHit(objects: IterableOnce[T], ray: Ray, minT: Double, maxT: Double, hit: Hit): Boolean =
    val tempHit = HitStruct()
    var hitAnything = false
    var closestT = maxT

    for obj <- objects do
      if rayHit(obj, ray, minT, closestT, tempHit) then
        hitAnything = true
        closestT = tempHit.t()
        hit.copyFrom(tempHit)

    hitAnything
```

### Phase 4: Rendering Pipeline (3 hours)

**File: `src/raytracer/render.scala`**

```scala
package raytracer.render

import bufferdata.*
import raytracer.vector.*
import raytracer.ray.*
import raytracer.hit.*
import raytracer.hittable.*
import raytracer.material.*
import raytracer.image.*
import numHelpers.*

// Sky gradient background
inline def skyColor(direction: Vec3d): Vec3d =
  val unitDir = direction.normalize()
  val t = 0.5 * (unitDir.y() + 1.0)
  val white = Vec3d(1.0, 1.0, 1.0)
  val blue = Vec3d(0.5, 0.7, 1.0)
  white.lerp(blue, t)

// Material scattering with buffer reuse
// Now uses hit.material (nested struct)
inline def scatterRay(
  hit: Hit,
  rayIn: Ray,
  rayOut: Ray,
  temp: Vec3d
): Boolean =
  if hit.material.materialType() == MaterialType.Lambertian then
    // Lambertian (diffuse) scattering
    temp.setRandomUnitVector()
    if temp.nearZero then
      hit.normal.copyTo(temp)

    hit.pos.copyTo(rayOut.origin)
    (hit.normal + temp).copyTo(rayOut.direction)
    true

  else if hit.material.materialType() == MaterialType.Metal then
    // Metal (specular) reflection
    rayIn.direction.normalize(temp)
    temp.reflect(hit.normal, rayOut.direction)

    // Add fuzz (roughness)
    if hit.material.fuzz() > 0 then
      val fuzzVec = Vec3d()
      fuzzVec.setRandomInUnitSphere()
      rayOut.direction =+ (fuzzVec * hit.material.fuzz())

    hit.pos.copyTo(rayOut.origin)

    // Only scatter if in correct hemisphere
    rayOut.direction.dot(hit.normal) > 0
  else
    false

// Iterative path tracing with zero-allocation hot path
def rayColor[T: Hittable](
  initialRay: Ray,
  world: T,
  maxDepth: Int
): Vec3d =
  // Allocate once per ray
  val hitBuffer = HitStruct()
  val currentRay = RayStruct()
  val scatteredRay = RayStruct()
  val tempVec = Vec3d()

  currentRay.copyFrom(initialRay)
  val attenuation = Vec3d(1.0, 1.0, 1.0)

  for depth <- 0 until maxDepth do
    if rayHit(world, currentRay, 0.001, 100000.0, hitBuffer) then
      val scattered = scatterRay(hitBuffer, currentRay, scatteredRay, tempVec)

      if scattered then
        attenuation =* hitBuffer.material.color  // Use nested material
        currentRay.copyFrom(scatteredRay)
      else
        // Ray absorbed
        return attenuation * hitBuffer.material.color
    else
      // No hit - return sky color
      val sky = skyColor(currentRay.direction)
      return sky * attenuation

  // Max depth reached - return black
  Vec3d(0, 0, 0)

// Camera setup
case class Camera(
  origin: Vec3d,
  lowerLeft: Vec3d,
  horizontal: Vec3d,
  vertical: Vec3d
)

def createCamera(
  origin: Vec3d,
  focalLength: Double,
  aspectRatio: Double
): Camera =
  val viewportHeight = 2.0
  val viewportWidth = aspectRatio * viewportHeight

  val horizontal = Vec3d(viewportWidth, 0, 0)
  val vertical = Vec3d(0, viewportHeight, 0)

  val lowerLeft = origin - (horizontal / 2.0) - (vertical / 2.0) - Vec3d(0, 0, focalLength)

  Camera(origin, lowerLeft, horizontal, vertical)

inline def getRay(camera: Camera, u: Double, v: Double, ray: Ray): Unit =
  camera.origin.copyTo(ray.origin)

  val target = camera.lowerLeft + (camera.horizontal * u) + (camera.vertical * v)
  (target - camera.origin).copyTo(ray.direction)

inline def gammaCorrect(color: Vec3d): Unit =
  color.x := Math.pow(color.x(), 0.7)
  color.y := Math.pow(color.y(), 0.7)
  color.z := Math.pow(color.z(), 0.7)

def renderImage[T: Hittable](
  world: T,
  camera: Camera,
  width: Int,
  height: Int,
  samplesPerPixel: Int,
  maxDepth: Int
): StructArray[ColorRGBASchema] =
  val pixels = struct[ColorRGBASchema].allocate(width * height)
  val ray = RayStruct()
  val color = Vec3d()

  for y <- 0 until height do
    for x <- 0 until width do
      color.set(0, 0, 0)

      for s <- 0 until samplesPerPixel do
        val u = (x + Math.random()) / width
        val v = (y + Math.random()) / height
        getRay(camera, u, v, ray)
        color =+ rayColor(ray, world, maxDepth)

      color =/ samplesPerPixel.toDouble
      gammaCorrect(color)

      pixels(y * width + x).setFromVec3d(color)

  pixels
```

### Phase 5: Scene Setup (1 hour)

**File: `src/raytracer/scene.scala`**

```scala
package raytracer.scene

import bufferdata.*
import raytracer.vector.*
import raytracer.sphere.*
import raytracer.material.*
import raytracer.render.Camera

case class Scene(
  world: StructArray[SphereSchema],
  camera: Camera
)

def createDefaultScene(): Scene =
  val spheres = struct[SphereSchema].allocate(4)

  // Red Lambertian sphere (center)
  spheres(0).center.set(0, 0, -1)
  spheres(0).radius := 0.5
  spheres(0).material.materialType := MaterialType.Lambertian
  spheres(0).material.color.set(0.8, 0.2, 0.2)
  spheres(0).material.fuzz := 0.0

  // Green Metal sphere (left, no fuzz)
  spheres(1).center.set(-1, 0, -1)
  spheres(1).radius := 0.5
  spheres(1).material.materialType := MaterialType.Metal
  spheres(1).material.color.set(0.2, 0.8, 0.2)
  spheres(1).material.fuzz := 0.0

  // Blue Metal sphere (right, with fuzz)
  spheres(2).center.set(1, 0, -1)
  spheres(2).radius := 0.5
  spheres(2).material.materialType := MaterialType.Metal
  spheres(2).material.color.set(0.2, 0.2, 0.8)
  spheres(2).material.fuzz := 0.3

  // Gray Lambertian ground
  spheres(3).center.set(0, -100.5, -1)
  spheres(3).radius := 100.0
  spheres(3).material.materialType := MaterialType.Lambertian
  spheres(3).material.color.set(0.5, 0.5, 0.5)
  spheres(3).material.fuzz := 0.0

  val camera = createCamera(
    origin = Vec3d(0, 0, 1),
    focalLength = 1.9,
    aspectRatio = 4.0 / 3.0
  )

  Scene(spheres, camera)
```

### Phase 6: Integration & Testing (2 hours)

**File: `test/src/RaytracerTest.scala`**

```scala
package raytracer

import munit.FunSuite
import bufferdata.*
import raytracer.vector.*
import raytracer.ray.*
import raytracer.hit.*
import raytracer.sphere.*
import raytracer.hittable.*
import raytracer.material.*
import raytracer.render.*
import raytracer.scene.*

class RaytracerTest extends FunSuite:

  test("Nested material access in Sphere"):
    val s = SphereStruct()
    s.center.set(1, 2, 3)
    s.radius := 0.5
    s.material.materialType := MaterialType.Metal
    s.material.color.set(0.8, 0.2, 0.1)
    s.material.fuzz := 0.3

    assertEquals(s.material.materialType(), MaterialType.Metal)
    assertEqualsDouble(s.material.color.r(), 0.8, 0.001)
    assertEqualsDouble(s.material.fuzz(), 0.3, 0.001)

  test("Nested material access in Hit"):
    val h = HitStruct()
    h.t := 1.5
    h.material.materialType := MaterialType.Lambertian
    h.material.color.set(1, 0, 0)
    h.material.fuzz := 0.0

    assertEquals(h.material.materialType(), MaterialType.Lambertian)
    assertEqualsDouble(h.material.color.r(), 1.0, 0.001)

  test("Material copyTo preserves all fields"):
    val m1 = MaterialStruct()
    m1.materialType := MaterialType.Metal
    m1.color.set(0.5, 0.5, 0.5)
    m1.fuzz := 0.2

    val m2 = MaterialStruct()
    m1.copyTo(m2)

    assertEquals(m2.materialType(), MaterialType.Metal)
    assertEqualsDouble(m2.color.r(), 0.5, 0.001)
    assertEqualsDouble(m2.fuzz(), 0.2, 0.001)

  test("Ray-sphere intersection populates nested material"):
    val sphere = SphereStruct()
    sphere.center.set(0, 0, -1)
    sphere.radius := 0.5
    sphere.material.materialType := MaterialType.Lambertian
    sphere.material.color.set(1, 0, 0)
    sphere.material.fuzz := 0.0

    val ray = Ray(Vec3d(0, 0, 0), Vec3d(0, 0, -1))
    val hit = HitStruct()

    assert(rayHit(sphere, ray, 0.0, 100.0, hit))
    assertEquals(hit.material.materialType(), MaterialType.Lambertian)
    assertEqualsDouble(hit.material.color.r(), 1.0, 0.001)

  test("Hit copyFrom preserves nested material"):
    val h1 = HitStruct()
    h1.t := 1.5
    h1.material.materialType := MaterialType.Metal
    h1.material.color.set(0.3, 0.3, 0.3)
    h1.material.fuzz := 0.5

    val h2 = HitStruct()
    h2.copyFrom(h1)

    assertEquals(h2.material.materialType(), MaterialType.Metal)
    assertEqualsDouble(h2.material.color.r(), 0.3, 0.001)
    assertEqualsDouble(h2.material.fuzz(), 0.5, 0.001)

  test("StructArray as Hittable via implicit conversion"):
    val spheres = struct[SphereSchema].allocate(2)

    spheres(0).center.set(0, 0, -1)
    spheres(0).radius := 0.5
    spheres(0).material.materialType := MaterialType.Lambertian
    spheres(0).material.color.set(1, 0, 0)

    spheres(1).center.set(1, 0, -1)
    spheres(1).radius := 0.5
    spheres(1).material.materialType := MaterialType.Metal
    spheres(1).material.color.set(0, 1, 0)

    val ray = Ray(Vec3d(0, 0, 0), Vec3d(0, 0, -1))
    val hit = HitStruct()

    assert(rayHit(spheres, ray, 0.0, 100.0, hit))
    assertEqualsDouble(hit.t(), 0.5, 0.001)

  test("Full render - smoke test"):
    val scene = createDefaultScene()

    val pixels = renderImage(
      world = scene.world,
      camera = scene.camera,
      width = 40,
      height = 30,
      samplesPerPixel = 4,
      maxDepth = 10
    )

    assertEquals(pixels.length, 40 * 30)

    var hasColor = false
    for i <- 0 until pixels.length do
      val r = pixels(i).r()
      if r > 0 && r < 255 then hasColor = true

    assert(hasColor, "Render should produce non-uniform colors")

  test("Performance benchmark"):
    val scene = createDefaultScene()

    val start = System.currentTimeMillis()

    val pixels = renderImage(
      world = scene.world,
      camera = scene.camera,
      width = 400,
      height = 300,
      samplesPerPixel = 100,
      maxDepth = 20
    )

    val duration = System.currentTimeMillis() - start

    println(s"Render time: ${duration}ms")
    println(s"Target: <25000ms (TypeScript baseline)")

    assert(duration < 60000, s"Render too slow: ${duration}ms")

  def assertEqualsDouble(actual: Double, expected: Double, delta: Double): Unit =
    assert(
      math.abs(actual - expected) <= delta,
      s"Expected ~$expected within $delta, got $actual"
    )
```

## Critical Files Summary

**Files to modify:**

1. `src/raytracer/vector.scala` - Add reflect() and copyTo() methods

**Files to create:** 2. `src/raytracer/ray.scala` - Ray struct + extensions 3. `src/raytracer/material.scala` - Material struct with type field inside 4. `src/raytracer/sphere.scala` - Sphere with nested MaterialSchema 5. `src/raytracer/hit.scala` - Hit with nested MaterialSchema 6. `src/raytracer/hittable.scala` - Typeclass using new SIP syntax 7. `src/raytracer/render.scala` - Ray tracing + rendering 8. `src/raytracer/scene.scala` - Scene creation 9. `test/src/RaytracerTest.scala` - Tests including nested struct validation

## Key Changes from Original Plan

1. **Material type moved inside MaterialSchema** - `(U8, Vec3dSchema, F64)` instead of sphere having separate type field
2. **Hit uses nested MaterialSchema** - `hit.material.color` instead of `hit.materialColor`
3. **New given syntax** - `given Hittable[Sphere]:` and `given [T: Hittable] => Hittable[IterableOnce[T]]:` instead of `with`
4. **Cleaner API** - Material is self-contained, easier to work with nested structs

## Performance Expectations

- **TypeScript baseline:** ~25s @ 400×300 @ 100 samples
- **Memory:** 10x+ reduction in allocations
- **Target:** <20s (20% improvement)
- **Optimistic:** <15s (40% improvement)

## Implementation Timeline

- Phase 1: 30 minutes
- Phase 2: 2 hours
- Phase 3: 3 hours
- Phase 4: 3 hours
- Phase 5: 1 hour
- Phase 6: 2 hours

**Total: 10-12 hours**
