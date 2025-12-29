import { Vec3 } from "./vec3";
import { Sphere, HittableList } from "./shapes";
import { type RenderProps, defaultRenderProps, renderImage } from "./render";

export const width = 400;
export const height = 300;

export function createScene(): HittableList {
  const objects = [
    // Three spheres in front
    new Sphere(new Vec3(0, 0, -1), 0.5),
    new Sphere(new Vec3(-1, 0, -1), 0.5),
    new Sphere(new Vec3(1, 0, -1), 0.5),
    // Ground sphere
    new Sphere(new Vec3(0, -100.5, -1), 100),
  ];

  // Flatten nested structure (F# had nested HittableList)
  return new HittableList(objects);
}

export function render(): Float64Array {
  const world = createScene();
  return renderImage(world, {
    width,
    height,
    focalLength: 0.9,
    samplesPerPixel: 100,
    maxRayBounces: 20,
  });
}
