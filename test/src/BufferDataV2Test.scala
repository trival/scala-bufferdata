package bufferdatav2tests

import munit.FunSuite
import _root_.bufferdatav2.*
import _root_.bufferdatav2.StructRef.*
import _root_.bufferdatav2.FieldRef.*

class BufferDataV2Test extends FunSuite:
  type ParticleSchema = (F32, U8)

  test("schema computes stride for (F32, U8)"):
    val particle = schema[ParticleSchema]
    assertEquals(particle.sizeInBytes, 5)

  test("StructArray allocate and read/write primitives"):
    val particle = schema[ParticleSchema]
    val array = particle.allocate(10)

    array(0)._0.set(1.5f)
    array(0)._1.set(42)

    val f32Value = array(0)._0.get.asInstanceOf[Float]
    val u8Value = array(0)._1.get.asInstanceOf[Int]

    assertEqualsDouble(f32Value.toDouble, 1.5d, 0.0001)
    assertEquals(u8Value, 42)

  test("Nested schema access works via chaining"):
    type Vec2 = (F32, F32)
    val particle = schema[(Vec2, U8)]

    val buffer = particle.allocate(1)
    val view: StructRef = buffer(0)

    view._0._0.set(3.0f)
    view._0._1.set(4.0f)
    view._1.set(200)

    assertEqualsDouble(view._0._0.get.asInstanceOf[Float].toDouble, 3.0d, 0.0001)
    assertEqualsDouble(view._0._1.get.asInstanceOf[Float].toDouble, 4.0d, 0.0001)
    assertEquals(view._1.get.asInstanceOf[Int], 200)

  test("StructView.copyFrom copies raw bytes"):
    val particle = schema[ParticleSchema]
    val array = particle.allocate(2)

    val first: StructRef = array(0)
    val second: StructRef = array(1)

    first._0.set(10.0f)
    first._1.set(128)
    second._0.set(0.0f)
    second._1.set(0)

    second.copyFrom(first)

    assertEqualsDouble(second._0.get.asInstanceOf[Float].toDouble, 10.0d, 0.0001)
    assertEquals(second._1.get.asInstanceOf[Int], 128)

  private def assertEqualsDouble(actual: Double, expected: Double, delta: Double): Unit =
    assert(math.abs(actual - expected) <= delta, s"Expected ~$expected, got $actual")
