package raytracer_raw

import scala.scalajs.js
import scala.scalajs.js.typedarray.Float64Array

// Direct port of TypeScript render.ts
// Mirrors web/ray-tracer-ts/render.ts

object Render {

  def rayColor(ray: Ray, world: Hittable, depth: Int): Vec3 = {
    var currentRay = ray
    var attenuation = Vec3(1.0, 1.0, 1.0) // Start with white (no attenuation)

    var bounce = 0
    while (bounce < depth) {
      val hit = world.rayHit(currentRay, 0.001, 100000.0)

      hit match {
        case Some(h) =>
          // Use material to determine scattering
          val materialResult = h.material.scatter(currentRay, h)

          // Attenuate by material color
          attenuation = attenuation.multiply(materialResult.color)

          materialResult.scatteredRay match {
            case Some(scatteredRay) =>
              // Ray scattered - continue bouncing
              currentRay = scatteredRay
            case None =>
              // No scatter (emissive material) - return attenuated color
              return attenuation
          }

        case None =>
          // Ray escaped - return sky color with attenuation
          val t = 0.5 * (currentRay.direction.y + 1.0)
          val white = Vec3(1.0, 1.0, 1.0)
          val blue = Vec3(0.5, 0.7, 1.0)
          val skyColor = white.lerp(blue, t)
          return skyColor.multiply(attenuation)
      }

      bounce += 1
    }

    // Max depth reached - return black
    Vec3(0.0, 0.0, 0.0)
  }

  def renderImage(
      world: Hittable,
      width: Int,
      height: Int,
      focalLength: Double = 1.9,
      origin: Vec3 = Vec3(0, 0, 1),
      samplesPerPixel: Int = 100,
      maxRayBounces: Int = 20
  ): Float64Array = {

    // Setup camera
    val aspectRatio = width.toDouble / height.toDouble
    val viewportHeight = 2.0
    val viewportWidth = aspectRatio * viewportHeight

    val viewportU = Vec3(viewportWidth, 0.0, 0.0)
    val viewportV = Vec3(0.0, -viewportHeight, 0.0)

    val pixelDeltaU = viewportU.div(width.toDouble)
    val pixelDeltaV = viewportV.div(height.toDouble)

    val viewportTopLeft = origin
      .sub(viewportU.div(2.0))
      .sub(viewportV.div(2.0))
      .sub(Vec3(0.0, 0.0, focalLength))

    val pixel00Loc = viewportTopLeft
      .add(pixelDeltaU.mul(0.5))
      .add(pixelDeltaV.mul(0.5))

    // Render
    val buffer = new Float64Array(width * height * 4)

    var y = 0
    while (y < height) {
      js.Dynamic.global.console.log(s"Rendering image row ${y + 1}")
      var x = 0
      while (x < width) {
        val i = (x + y * width) * 4

        // Compute pixel center
        val pixelCenter = pixel00Loc
          .add(pixelDeltaU.mul(x.toDouble))
          .add(pixelDeltaV.mul(y.toDouble))

        var color = Vec3(0.0, 0.0, 0.0)

        // Additional samples for anti-aliasing
        var sample = 0
        while (sample < samplesPerPixel) {
          val jitter = Vec3(
            (Math.random() - 0.5) * pixelDeltaU.x,
            (Math.random() - 0.5) * pixelDeltaV.y,
            0.0
          )
          val sampleCenter = pixelCenter.add(jitter)
          val sampleDirection = sampleCenter.sub(origin).normalize()
          val sampleRay = Ray(origin, sampleDirection)
          color = color.add(rayColor(sampleRay, world, maxRayBounces))
          sample += 1
        }

        // Average samples
        color = color.div(samplesPerPixel.toDouble)

        // Store in buffer
        buffer(i) = color.x
        buffer(i + 1) = color.y
        buffer(i + 2) = color.z
        buffer(i + 3) = 1.0

        x += 1
      }
      y += 1
    }

    // Apply gamma correction
    var i = 0
    while (i < buffer.length) {
      buffer(i) = Math.pow(buffer(i), 0.7)
      i += 1
    }

    buffer
  }
}
