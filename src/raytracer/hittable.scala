package raytracer.hittable

import bufferdata.*
import raytracer.vector.*
import raytracer.ray.*
import raytracer.hit.*
import raytracer.sphere.*
import raytracer.material.{copyTo as copyMaterial, MaterialType, *}
import scala.language.implicitConversions
import raytracer.render.Renderer.renderCache

trait Hittable[T]:
  def rayHit(
      obj: T,
      ray: Ray,
      minT: Double,
      maxT: Double,
      hitBuffer: Hit
  ): Boolean

inline def rayHit[T: Hittable](
    obj: T,
    ray: Ray,
    minT: Double,
    maxT: Double,
    hit: Hit
): Boolean =
  summon[Hittable[T]].rayHit(obj, ray, minT, maxT, hit)

given Hittable[Sphere]:
  def rayHit(
      sphere: Sphere,
      ray: Ray,
      minT: Double,
      maxT: Double,
      hit: Hit
  ): Boolean =
    // Solve |ray.at(t) - center|^2 = radius^2
    val oc = hit.pos // Temp vec borrored from pos
    oc := ray.origin
    oc =- sphere.center

    val a = ray.direction.lengthSquared
    val halfB = oc.dot(ray.direction)
    val c = oc.lengthSquared - sphere.radius() * sphere.radius()
    val discriminant = halfB * halfB - a * c

    if discriminant < 0 then return false

    val sqrtD = Math.sqrt(discriminant)

    var root = (-halfB - sqrtD) / a
    if root < minT || root > maxT then
      root = (-halfB + sqrtD) / a
      if root < minT || root > maxT then return false

    hit.t := root
    ray.at(root, hit.pos) // reassign hit.pos

    hit.pos.sub(sphere.center, hit.normal)
    hit.normal =/ sphere.radius()
    val frontFace = ray.direction.dot(hit.normal) < 0
    hit.frontFace := (if frontFace then 1 else 0).toShort

    if !frontFace then hit.normal =* -1.0

    sphere.material.copyMaterial(hit.material)

    true

given [T: Hittable] => Hittable[IterableOnce[T]]:
  def rayHit(
      objects: IterableOnce[T],
      ray: Ray,
      minT: Double,
      maxT: Double,
      hit: Hit
  ): Boolean =
    val tempHit = HitStruct()
    var hitAnything = false
    var closestT = maxT

    for obj <- objects.iterator do
      if summon[Hittable[T]].rayHit(obj, ray, minT, closestT, tempHit) then
        hitAnything = true
        closestT = tempHit.t()
        hit.copyFrom(tempHit)

    hitAnything

given [Fields <: Tuple](using Hittable[StructRef[Fields]]): Hittable[
  StructArray[Fields]
] with
  def rayHit(
      arr: StructArray[Fields],
      ray: Ray,
      minT: Double,
      maxT: Double,
      hit: Hit
  ): Boolean =
    summon[Hittable[IterableOnce[StructRef[Fields]]]]
      .rayHit(arr.iterator, ray, minT, maxT, hit)
