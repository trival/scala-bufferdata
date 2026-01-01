package raytracer_raw

// Direct port of TypeScript scene.ts
// Mirrors web/ray-tracer-ts/scene.ts EXACTLY

object Scene {

  def createScene(): Hittable = {
    // Define materials - exact match to TypeScript
    val grayMaterial = Lambertian(Vec3(0.5, 0.5, 0.5))
    val redMaterial = Lambertian(Vec3(0.8, 0.2, 0.2))
    val greenMetal = Metal(Vec3(0.6, 0.8, 0.2), fuzz = 0.0)
    val blueMetal = Metal(Vec3(0.2, 0.5, 0.8), fuzz = 0.3)

    val objects = Seq(
      // Three spheres in front - mix of materials
      Sphere(Vec3(0.0, 0.0, -1.0), 0.5, redMaterial),
      Sphere(Vec3(-1.0, 0.0, -1.0), 0.5, greenMetal),
      Sphere(Vec3(1.0, 0.0, -1.0), 0.5, blueMetal),
      // Ground sphere
      Sphere(Vec3(0.0, -100.5, -1.0), 100.0, grayMaterial)
    )

    HittableList(objects)
  }
}
