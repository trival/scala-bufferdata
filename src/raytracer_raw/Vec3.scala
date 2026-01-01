package raytracer_raw

import scala.scalajs.js
import scala.util.Random

// Direct port of TypeScript Vec3 class
// Mirrors web/ray-tracer-ts/vec3.ts
case class Vec3(x: Double, y: Double, z: Double) {

  // Vector addition
  def add(other: Vec3): Vec3 =
    Vec3(this.x + other.x, this.y + other.y, this.z + other.z)

  // Vector subtraction
  def sub(other: Vec3): Vec3 =
    Vec3(this.x - other.x, this.y - other.y, this.z - other.z)

  // Scalar multiplication
  def mul(scalar: Double): Vec3 =
    Vec3(this.x * scalar, this.y * scalar, this.z * scalar)

  // Scalar division
  def div(scalar: Double): Vec3 =
    this.mul(1.0 / scalar)

  // Component-wise multiplication (Hadamard product)
  def multiply(other: Vec3): Vec3 =
    Vec3(this.x * other.x, this.y * other.y, this.z * other.z)

  // Dot product
  def dot(other: Vec3): Double =
    this.x * other.x + this.y * other.y + this.z * other.z

  // Length squared
  def lengthSquared(): Double =
    this.dot(this)

  // Length
  def length(): Double =
    Math.sqrt(this.lengthSquared())

  // Normalize (unit vector)
  def normalize(): Vec3 =
    this.div(this.length())

  // Reflect vector around a normal
  def reflect(normal: Vec3): Vec3 = {
    // v - 2 * dot(v, n) * n
    this.sub(normal.mul(2.0 * this.dot(normal)))
  }

  // Linear interpolation
  def lerp(other: Vec3, t: Double): Vec3 =
    this.mul(1.0 - t).add(other.mul(t))

  override def toString: String =
    s"Vec3($x, $y, $z)"
}

object Vec3 {
  // Generate random vector in unit sphere
  def randomInUnitSphere(): Vec3 = {
    var p = Vec3(0, 0, 0)
    var continue = true
    while (continue) {
      p = Vec3(
        -1.0 + 2.0 * Math.random(),
        -1.0 + 2.0 * Math.random(),
        -1.0 + 2.0 * Math.random()
      )
      if (p.lengthSquared() < 1.0) {
        continue = false
      }
    }
    p
  }
}
