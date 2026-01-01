package raytracer_raw

// Direct port of TypeScript Material interfaces and classes
// Mirrors web/ray-tracer-ts/objects.ts

case class Hit(
    t: Double,
    pos: Vec3,
    normal: Vec3,
    frontFace: Boolean,
    material: Material
)

case class MaterialResult(
    color: Vec3,
    scatteredRay: Option[Ray]
)

trait Material {
  def scatter(rayIn: Ray, hit: Hit): MaterialResult
}

case class Lambertian(color: Vec3) extends Material {
  def scatter(rayIn: Ray, hit: Hit): MaterialResult = {
    // Generate random diffuse reflection direction
    val randomUnit = Vec3.randomInUnitSphere().normalize()
    var scatterDirection = hit.normal.add(randomUnit).normalize()

    // Handle degenerate case where direction is near zero
    if (scatterDirection.lengthSquared() < 1e-6) {
      scatterDirection = hit.normal
    }

    val scatteredRay = Ray(hit.pos, scatterDirection)

    MaterialResult(
      color = this.color,
      scatteredRay = Some(scatteredRay)
    )
  }
}

case class Metal(color: Vec3, fuzz: Double = 0.0) extends Material {
  // Clamp fuzz to [0, 1]
  private val clampedFuzz = Math.min(1.0, Math.max(0.0, fuzz))

  def scatter(rayIn: Ray, hit: Hit): MaterialResult = {
    // Reflect ray direction around normal
    val reflected = rayIn.direction.normalize().reflect(hit.normal)

    // Add fuzz/roughness by randomizing direction slightly
    val fuzzVector = Vec3.randomInUnitSphere().mul(clampedFuzz)
    val scatterDirection = reflected.add(fuzzVector)

    // Only scatter if reflected ray is in the correct hemisphere
    val scatteredRay =
      if (scatterDirection.dot(hit.normal) > 0.0)
        Some(Ray(hit.pos, scatterDirection))
      else
        None

    MaterialResult(
      color = this.color,
      scatteredRay = scatteredRay
    )
  }
}
