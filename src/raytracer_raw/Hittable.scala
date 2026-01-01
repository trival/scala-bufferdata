package raytracer_raw

// Direct port of TypeScript Hittable interface and implementations
// Mirrors web/ray-tracer-ts/objects.ts

trait Hittable {
  def rayHit(ray: Ray, minT: Double, maxT: Double): Option[Hit]
}

case class Sphere(center: Vec3, radius: Double, material: Material)
    extends Hittable {

  def rayHit(ray: Ray, minT: Double, maxT: Double): Option[Hit] = {
    val oc = ray.origin.sub(this.center)
    val halfB = oc.dot(ray.direction)
    val c = oc.lengthSquared() - this.radius * this.radius
    val discriminant = halfB * halfB - c

    if (discriminant < 0.0) {
      return None
    }

    val sqrtD = Math.sqrt(discriminant)
    var t = -halfB - sqrtD

    // Check if t is in valid range
    if (t < minT || t > maxT) {
      t = -halfB + sqrtD
      if (t < minT || t > maxT) {
        return None
      }
    }

    val p = ray.at(t)
    var normal = p.sub(this.center).div(this.radius)
    val frontFace = ray.direction.dot(normal) < 0.0

    // Flip normal if hitting back face
    if (!frontFace) {
      normal = normal.mul(-1.0)
    }

    Some(Hit(t, p, normal, frontFace, this.material))
  }
}

case class HittableList(objects: Seq[Hittable]) extends Hittable {

  def rayHit(ray: Ray, minT: Double, maxT: Double): Option[Hit] = {
    var closestSoFar = maxT
    var closestHit: Option[Hit] = None

    for (obj <- objects) {
      val hit = obj.rayHit(ray, minT, closestSoFar)
      hit match {
        case Some(h) =>
          closestSoFar = h.t
          closestHit = Some(h)
        case None =>
        // Do nothing
      }
    }

    closestHit
  }
}
