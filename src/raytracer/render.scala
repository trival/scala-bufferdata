package raytracer.render

import bufferdata.*
import raytracer.vector.{copyTo as copyVec3d, *}
import raytracer.ray.*
import raytracer.hit.*
import raytracer.hittable.*
import raytracer.material.*
import raytracer.image.*
import numHelpers.*

inline def skyColor(direction: Vec3d): Vec3d =
  val unitDir = Vec3d()
  direction.normalize(unitDir)
  val t = 0.5 * (unitDir.y() + 1.0)
  val white = Vec3d(1.0, 1.0, 1.0)
  val blue = Vec3d(0.5, 0.7, 1.0)
  white.lerp(blue, t)

inline def scatterRay(
    hit: Hit,
    rayIn: Ray,
    rayOut: Ray,
    temp: Vec3d
): Boolean =
  val matType = hit.material.materialTypeEnum

  if matType == MaterialType.Lambertian then
    temp.setRandomUnitVector()
    if temp.nearZero then hit.normal.copyVec3d(temp)

    hit.pos.copyVec3d(rayOut.origin)
    (hit.normal + temp).copyVec3d(rayOut.direction)
    true
  else if matType == MaterialType.Metal then
    rayIn.direction.normalize(temp)
    temp.reflect(hit.normal, rayOut.direction)

    if hit.material.fuzz() > 0 then
      val fuzzVec = Vec3d()
      fuzzVec.setRandomInUnitSphere()
      rayOut.direction =+ (fuzzVec * hit.material.fuzz())

    hit.pos.copyVec3d(rayOut.origin)
    rayOut.direction.dot(hit.normal) > 0
  else false

def rayColor[T: Hittable](
    initialRay: Ray,
    world: T,
    maxDepth: Int
): Vec3d =
  val hitBuffer = HitStruct()
  val currentRay = RayStruct()
  val scatteredRay = RayStruct()
  val tempVec = Vec3d()

  currentRay.copyFrom(initialRay)
  val attenuation = Vec3d(1.0, 1.0, 1.0)

  var depth = 0
  while depth < maxDepth do
    if rayHit(world, currentRay, 0.001, 100000.0, hitBuffer) then
      val scattered = scatterRay(hitBuffer, currentRay, scatteredRay, tempVec)

      if scattered then
        attenuation =* hitBuffer.material.color
        currentRay.copyFrom(scatteredRay)
      else return attenuation * hitBuffer.material.color
    else
      val sky = skyColor(currentRay.direction)
      return sky * attenuation

    depth += 1

  Vec3d(0, 0, 0)

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

  val lowerLeft =
    origin - (horizontal / 2.0) - (vertical / 2.0) - Vec3d(0, 0, focalLength)

  Camera(origin, lowerLeft, horizontal, vertical)

inline def getRay(camera: Camera, u: Double, v: Double, ray: Ray): Unit =
  camera.origin.copyVec3d(ray.origin)
  val target =
    camera.lowerLeft + (camera.horizontal * u) + (camera.vertical * v)
  (target - camera.origin).copyVec3d(ray.direction)

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

  var y = 0
  while y < height do
    var x = 0
    while x < width do
      color.set(0, 0, 0)

      var s = 0
      while s < samplesPerPixel do
        val u = (x + Math.random()) / width
        val v = (y + Math.random()) / height
        getRay(camera, u, v, ray)
        color =+ rayColor(ray, world, maxDepth)
        s += 1

      color =/ samplesPerPixel.toDouble
      gammaCorrect(color)

      pixels(y * width + x).setFromVec3d(color)

      x += 1
    y += 1

  pixels
