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

export interface Hit {
  t: number;
  p: Vec3;
  normal: Vec3;
  frontFace: boolean;
}

export interface Hittable {
  rayHit(ray: Ray, minT: number, maxT: number): Hit | null;
}
