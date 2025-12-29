import { Vec3 } from "./vec3";
import { Sphere, HittableList, Lambertian, Metal } from "./objects";
import { renderImage } from "./render";

export const width = 400;
export const height = 300;

export function createScene(): HittableList {
  // Define materials
  const grayMaterial = new Lambertian(new Vec3(0.5, 0.5, 0.5));
  const redMaterial = new Lambertian(new Vec3(0.8, 0.2, 0.2));
  const greenMetal = new Metal(new Vec3(0.6, 0.8, 0.2), 0.0);
  const blueMetal = new Metal(new Vec3(0.2, 0.5, 0.8), 0.3);

  const objects = [
    // Three spheres in front - mix of materials
    new Sphere(new Vec3(0, 0, -1), 0.5, redMaterial),
    new Sphere(new Vec3(-1, 0, -1), 0.5, greenMetal),
    new Sphere(new Vec3(1, 0, -1), 0.5, blueMetal),
    // Ground sphere
    new Sphere(new Vec3(0, -100.5, -1), 100, grayMaterial),
  ];

  // Flatten nested structure (F# had nested HittableList)
  return new HittableList(objects);
}

export function render(): Float64Array {
  const world = createScene();
  return renderImage(world, {
    width,
    height,
    origin: new Vec3(0, 0, 1),
    focalLength: 1.9,
    samplesPerPixel: 100,
    maxRayBounces: 20,
  });
}
