import { Vec3 } from "./vec3";

export class Ray {
  constructor(
    public origin: Vec3,
    public direction: Vec3,
  ) {}

  at(t: number): Vec3 {
    return this.origin.add(this.direction.mul(t));
  }
}

export interface Material {
  scatter(rayIn: Ray, hit: Hit): MaterialResult;
}

export interface MaterialResult {
  color: Vec3;
  scatteredRay: Ray | null;
}

export interface Hit {
  t: number;
  pos: Vec3;
  normal: Vec3;
  frontFace: boolean;
  material: Material;
}

export interface Hittable {
  rayHit(ray: Ray, minT: number, maxT: number): Hit | null;
}

export class Sphere implements Hittable {
  constructor(
    public center: Vec3,
    public radius: number,
    public material: Material,
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

    return { t, pos: p, normal, frontFace, material: this.material };
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

export class Lambertian implements Material {
  constructor(public color: Vec3) {}

  scatter(_rayIn: Ray, hit: Hit): MaterialResult {
    // Generate random diffuse reflection direction
    const randomUnit = Vec3.randomInUnitSphere().normalize();
    let scatterDirection = hit.normal.add(randomUnit).normalize();

    // Handle degenerate case where direction is near zero
    if (scatterDirection.lengthSquared() < 1e-6) {
      scatterDirection = hit.normal;
    }

    const scatteredRay = new Ray(hit.pos, scatterDirection);

    return {
      color: this.color,
      scatteredRay: scatteredRay,
    };
  }
}

export class Metal implements Material {
  constructor(
    public color: Vec3,
    public fuzz: number = 0,
  ) {
    // Clamp fuzz to [0, 1]
    this.fuzz = Math.min(1, Math.max(0, fuzz));
  }

  scatter(rayIn: Ray, hit: Hit): MaterialResult {
    // Reflect ray direction around normal
    const reflected = rayIn.direction.normalize().reflect(hit.normal);

    // Add fuzz/roughness by randomizing direction slightly
    const fuzzVector = Vec3.randomInUnitSphere().mul(this.fuzz);
    const scatterDirection = reflected.add(fuzzVector);

    // Only scatter if reflected ray is in the correct hemisphere
    const scatteredRay =
      scatterDirection.dot(hit.normal) > 0
        ? new Ray(hit.pos, scatterDirection)
        : null;

    return {
      color: this.color,
      scatteredRay: scatteredRay,
    };
  }
}
