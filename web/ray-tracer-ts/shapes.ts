import { Vec3 } from "./vec3";
import { Ray, type Hit, type Hittable } from "./ray";

export class Sphere implements Hittable {
  constructor(
    public center: Vec3,
    public radius: number,
  ) {}

  rayHit(ray: Ray, minT: number, maxT: number): Hit | null {
    const oc = ray.origin.sub(this.center);
    const halfB = oc.dot(ray.direction);
    const c = oc.lengthSquared() - this.radius * this.radius;
    const discriminant = halfB * halfB - c;

    if (discriminant < 0) {
      return null;
    }

    const sqrtD = Math.sqrt(discriminant);
    let t = -halfB - sqrtD;

    // Check if t is in valid range
    if (t < minT || t > maxT) {
      t = -halfB + sqrtD;
      if (t < minT || t > maxT) {
        return null;
      }
    }

    const p = ray.at(t);
    let normal = p.sub(this.center).div(this.radius);
    const frontFace = ray.direction.dot(normal) < 0;

    // Flip normal if hitting back face
    if (!frontFace) {
      normal = normal.mul(-1);
    }

    return { t, p, normal, frontFace };
  }
}

export class HittableList implements Hittable {
  constructor(public objects: Hittable[]) {}

  rayHit(ray: Ray, minT: number, maxT: number): Hit | null {
    let closestSoFar = maxT;
    let closestHit: Hit | null = null;

    for (const obj of this.objects) {
      const hit = obj.rayHit(ray, minT, closestSoFar);
      if (hit) {
        closestSoFar = hit.t;
        closestHit = hit;
      }
    }

    return closestHit;
  }
}
