export class Vec3 {
  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {}

  // Vector addition
  add(other: Vec3): Vec3 {
    return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  // Vector subtraction
  sub(other: Vec3): Vec3 {
    return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  // Scalar multiplication
  mul(scalar: number): Vec3 {
    return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  // Scalar division
  div(scalar: number): Vec3 {
    return this.mul(1 / scalar);
  }

  // Component-wise multiplication (Hadamard product)
  multiply(other: Vec3): Vec3 {
    return new Vec3(this.x * other.x, this.y * other.y, this.z * other.z);
  }

  // Dot product
  dot(other: Vec3): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  // Length squared
  lengthSquared(): number {
    return this.dot(this);
  }

  // Length
  length(): number {
    return Math.sqrt(this.lengthSquared());
  }

  // Normalize (unit vector)
  normalize(): Vec3 {
    return this.div(this.length());
  }

  // Reflect vector around a normal
  reflect(normal: Vec3): Vec3 {
    // v - 2 * dot(v, n) * n
    return this.sub(normal.mul(2 * this.dot(normal)));
  }

  // Linear interpolation
  lerp(other: Vec3, t: number): Vec3 {
    return this.mul(1 - t).add(other.mul(t));
  }

  // Generate random vector in unit sphere
  static randomInUnitSphere(): Vec3 {
    while (true) {
      const p = new Vec3(
        -1 + 2 * Math.random(),
        -1 + 2 * Math.random(),
        -1 + 2 * Math.random(),
      );
      if (p.lengthSquared() < 1) {
        return p;
      }
    }
  }

  toString(): string {
    return `Vec3(${this.x}, ${this.y}, ${this.z})`;
  }
}
