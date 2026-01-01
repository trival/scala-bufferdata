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
      materialType: MaterialType,
      color: Vec3d,
      fuzz: Double = 0.0
  ): Sphere =
    val s = Sphere()
    s.center := center
    s.radius := radius
    s.material.materialType := materialType.toShort
    s.material.color := color
    s.material.fuzz := fuzz
    s

extension (s: Sphere)
  inline def center = s(0)
  inline def radius = s(1)
  inline def material = s(2) // Returns Material (nested struct)
