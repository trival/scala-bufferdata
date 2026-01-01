package raytracer_raw

// Direct port of TypeScript Ray class
// Mirrors web/ray-tracer-ts/objects.ts
case class Ray(origin: Vec3, direction: Vec3) {

  def at(t: Double): Vec3 =
    origin.add(direction.mul(t))
}
