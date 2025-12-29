import { type Hittable, Ray } from "./objects";
import { Vec3 } from "./vec3";

export interface RenderProps {
  width: number;
  height: number;
  focalLength: number;
  origin: Vec3;
  direction: Vec3;
  samplesPerPixel: number;
  maxRayBounces: number;
}

export const defaultRenderProps: RenderProps = {
  width: 400,
  height: 300,
  focalLength: 1.0,
  origin: new Vec3(0, 0, 0),
  direction: new Vec3(0, 0, -1),
  samplesPerPixel: 1,
  maxRayBounces: 10,
};

export function rayColor(ray: Ray, world: Hittable, depth: number): Vec3 {
  let currentRay = ray;
  let attenuation = new Vec3(1, 1, 1); // Start with white (no attenuation)

  for (let bounce = 0; bounce < depth; bounce++) {
    const hit = world.rayHit(currentRay, 0.001, 100000);

    if (hit) {
      // Use material to determine scattering
      const materialResult = hit.material.scatter(currentRay, hit);

      // Attenuate by material color
      attenuation = attenuation.multiply(materialResult.color);

      if (materialResult.scatteredRay) {
        // Ray scattered - continue bouncing
        currentRay = materialResult.scatteredRay;
      } else {
        // No scatter (emissive material) - return attenuated color
        return attenuation;
      }
    } else {
      // Ray escaped - return sky color with attenuation
      const t = 0.5 * (currentRay.direction.y + 1);
      const white = new Vec3(1, 1, 1);
      const blue = new Vec3(0.5, 0.7, 1.0);
      const skyColor = white.lerp(blue, t);
      return skyColor.multiply(attenuation);
    }
  }

  // Max depth reached - return black
  return new Vec3(0, 0, 0);
}

export function renderImage(
  world: Hittable,
  props: Partial<RenderProps> = {},
): Float64Array {
  const { width, height, focalLength, origin, samplesPerPixel, maxRayBounces } =
    { ...defaultRenderProps, ...props };

  // Setup camera
  const aspectRatio = width / height;
  const viewportHeight = 2.0;
  const viewportWidth = aspectRatio * viewportHeight;

  const viewportU = new Vec3(viewportWidth, 0, 0);
  const viewportV = new Vec3(0, -viewportHeight, 0);

  const pixelDeltaU = viewportU.div(width);
  const pixelDeltaV = viewportV.div(height);

  const viewportTopLeft = origin
    .sub(viewportU.div(2))
    .sub(viewportV.div(2))
    .sub(new Vec3(0, 0, focalLength));

  const pixel00Loc = viewportTopLeft
    .add(pixelDeltaU.mul(0.5))
    .add(pixelDeltaV.mul(0.5));

  // Render
  const buffer = new Float64Array(width * height * 4);

  for (let y = 0; y < height; y++) {
    console.log("Rendering image row", y + 1);
    for (let x = 0; x < width; x++) {
      const i = (x + y * width) * 4;

      // Compute pixel center
      let pixelCenter = pixel00Loc
        .add(pixelDeltaU.mul(x))
        .add(pixelDeltaV.mul(y));

      let color = new Vec3(0, 0, 0);

      // Additional samples for anti-aliasing
      for (let sample = 0; sample < samplesPerPixel; sample++) {
        const jitter = new Vec3(
          (Math.random() - 0.5) * pixelDeltaU.x,
          (Math.random() - 0.5) * pixelDeltaV.y,
          0,
        );
        const sampleCenter = pixelCenter.add(jitter);
        const sampleDirection = sampleCenter.sub(origin).normalize();
        const sampleRay = new Ray(origin, sampleDirection);
        color = color.add(rayColor(sampleRay, world, maxRayBounces));
      }

      // Average samples
      color = color.div(samplesPerPixel);

      // Store in buffer
      buffer[i] = color.x;
      buffer[i + 1] = color.y;
      buffer[i + 2] = color.z;
      buffer[i + 3] = 1.0;
    }
  }

  // Apply gamma correction
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] = Math.pow(buffer[i], 0.7);
  }

  return buffer;
}
