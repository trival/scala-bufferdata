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
