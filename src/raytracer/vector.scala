package raytracer.vector

import bufferdata.F64
import bufferdata.struct
import bufferdata.StructRef
import numHelpers.fit0111

type Vec3dSchema = (F64, F64, F64)

val Vec3dStruct = struct[Vec3dSchema]

type Vec3d = StructRef[Vec3dSchema]

object Vec3d:
  inline def apply(): Vec3d = Vec3dStruct()

  inline def apply(x: Double, y: Double, z: Double): Vec3d =
    val v = Vec3d()
    v.set(x, y, z)
    v

  inline def apply(value: Double): Vec3d =
    Vec3d(value, value, value)

  // Helper functions

  inline def random(target: Vec3d): Unit =
    target.set(Math.random(), Math.random(), Math.random())

  inline def randomRange(min: Vec3d, max: Vec3d, target: Vec3d): Unit =
    target.x := min.x() + Math.random() * (max.x() - min.x())
    target.y := min.y() + Math.random() * (max.y() - min.y())
    target.z := min.z() + Math.random() * (max.z() - min.z())

  inline def randomRange(min: Vec3d, max: Vec3d): Vec3d =
    val res = Vec3d()
    randomRange(min, max, res)
    res

  def randomInUnitSphere(target: Vec3d): Unit =
    var l = 2.0
    while l >= 1.0 do
      target.set(
        Math.random().fit0111,
        Math.random().fit0111,
        Math.random().fit0111
      )
      l = target.lengthSquared

  def randomUnitVector(target: Vec3d): Unit =
    randomInUnitSphere(target)
    target.normalize()

  def randomInHemisphere(normal: Vec3d, target: Vec3d): Unit =
    randomInUnitSphere(target)
    if target.dot(normal) < 0.0 then target =* -1.0

extension (v: Vec3d)
  inline def x = v(0)
  inline def y = v(1)
  inline def z = v(2)

  inline def r = v(0)
  inline def g = v(1)
  inline def b = v(2)

  inline def set(x: Double, y: Double, z: Double): Unit =
    v.x := x
    v.y := y
    v.z := z

  inline def set(num: Double): Unit =
    v.set(num, num, num)

  inline def setRandom(): Unit =
    Vec3d.random(v)

  inline def setRandomRange(min: Vec3d, max: Vec3d): Unit =
    Vec3d.randomRange(min, max, v)

  inline def setRandomInUnitSphere(): Unit =
    Vec3d.randomInUnitSphere(v)

  inline def setRandomUnitVector(): Unit =
    Vec3d.randomUnitVector(v)

  inline def setRandomInHemisphere(normal: Vec3d): Unit =
    Vec3d.randomInHemisphere(normal, v)

  inline def add(other: Vec3d, target: Vec3d): Unit =
    target.x := v.x() + other.x()
    target.y := v.y() + other.y()
    target.z := v.z() + other.z()

  inline def +(other: Vec3d): Vec3d =
    val res = Vec3d()
    v.add(other, res)
    res

  inline def =+(other: Vec3d): Unit =
    v.add(other, v)

  inline def add(scalar: Double, target: Vec3d): Unit =
    target.x := v.x() + scalar
    target.y := v.y() + scalar
    target.z := v.z() + scalar

  inline def +(scalar: Double): Vec3d =
    val res = Vec3d()
    v.add(scalar, res)
    res

  inline def =+(scalar: Double): Unit =
    v.add(scalar, v)

  inline def sub(other: Vec3d, target: Vec3d): Unit =
    target.x := v.x() - other.x()
    target.y := v.y() - other.y()
    target.z := v.z() - other.z()

  inline def -(other: Vec3d): Vec3d =
    val res = Vec3d()
    v.sub(other, res)
    res

  inline def =-(other: Vec3d): Unit =
    v.sub(other, v)

  inline def sub(scalar: Double, target: Vec3d): Unit =
    target.x := v.x() - scalar
    target.y := v.y() - scalar
    target.z := v.z() - scalar

  inline def -(scalar: Double): Vec3d =
    val res = Vec3d()
    v.sub(scalar, res)
    res

  inline def =-(scalar: Double): Unit =
    v.sub(scalar, v)

  inline def mul(other: Vec3d, target: Vec3d): Unit =
    target.x := v.x() * other.x()
    target.y := v.y() * other.y()
    target.z := v.z() * other.z()

  inline def *(other: Vec3d): Vec3d =
    val res = Vec3d()
    v.mul(other, res)
    res

  inline def =*(other: Vec3d): Unit =
    v.mul(other, v)

  inline def mul(scalar: Double, target: Vec3d): Unit =
    target.x := v.x() * scalar
    target.y := v.y() * scalar
    target.z := v.z() * scalar

  inline def *(scalar: Double): Vec3d =
    val res = Vec3d()
    v.mul(scalar, res)
    res

  inline def =*(scalar: Double): Unit =
    v.mul(scalar, v)

  inline def div(scalar: Double, target: Vec3d): Unit =
    v.mul(1.0 / scalar, target)

  inline def /(scalar: Double): Vec3d =
    val res = Vec3d()
    v.div(scalar, res)
    res

  inline def =/(scalar: Double): Unit =
    v.div(scalar, v)

  inline def dot(other: Vec3d): Double =
    v.x() * other.x() + v.y() * other.y() + v.z() * other.z()

  inline def cross(other: Vec3d, target: Vec3d): Unit =
    target.x := v.y() * other.z() - v.z() * other.y()
    target.y := v.z() * other.x() - v.x() * other.z()
    target.z := v.x() * other.y() - v.y() * other.x()

  inline def cross(other: Vec3d): Vec3d =
    val res = Vec3d()
    v.cross(other, res)
    res

  inline def lengthSquared: Double =
    v.dot(v)

  inline def length: Double =
    Math.sqrt(v.lengthSquared)

  inline def normalize(target: Vec3d): Unit =
    v.div(v.length, target)

  inline def normalize(): Unit =
    v.normalize(v)

  inline def lerp(other: Vec3d, t: Double, target: Vec3d): Unit =
    val oneMinusT = 1.0 - t
    target.x := v.x() * oneMinusT + other.x() * t
    target.y := v.y() * oneMinusT + other.y() * t
    target.z := v.z() * oneMinusT + other.z() * t

  inline def lerp(other: Vec3d, t: Double): Vec3d =
    val res = Vec3d()
    v.lerp(other, t, res)
    res

  inline def nearZero: Boolean =
    v.lengthSquared < 1e-6

  inline def unary_- : Vec3d =
    v * -1.0

extension (scalar: Double)
  inline def *(v: Vec3d): Vec3d =
    v * scalar
