package bufferdatav2

import munit.FunSuite

class BufferDataV2Test extends FunSuite:
  import BinaryPrimitiveType.{F32, U8}

  test("struct layout computes stride for (F32, U8)"):
    val layout = struct(F32, U8)
    assertEquals(layout.sizeInBytes, 5)

  test("StructArray allocate and read/write primitives"):
    val layout = struct(F32, U8)
    val array = layout.allocate(10)

    array(0)._0.set(1.5f)
    array(0)._1.set(42)

    val f32Value = array(0)._0.get.asInstanceOf[Float]
    val u8Value = array(0)._1.get.asInstanceOf[Int]

    assertEqualsDouble(f32Value.toDouble, 1.5d, 0.0001)
    assertEquals(u8Value, 42)

  test("Nested struct access works via field chaining"):
    val vec2 = struct(F32, F32)
    val particle = struct(vec2, U8)

    val buffer = particle.allocate(1)
    val particleView = buffer(0)

    particleView._0._0.set(3.0f)
    particleView._0._1.set(4.0f)
    particleView._1.set(200)

    assertEqualsDouble(particleView._0._0.get.asInstanceOf[Float].toDouble, 3.0d, 0.0001)
    assertEqualsDouble(particleView._0._1.get.asInstanceOf[Float].toDouble, 4.0d, 0.0001)
    assertEquals(particleView._1.get.asInstanceOf[Int], 200)

  test("StructView.copyFrom copies raw bytes"):
    val layout = struct(F32, U8)
    val array = layout.allocate(2)

    array(0)._0.set(10.0f)
    array(0)._1.set(128)

    array(1)._0.set(0.0f)
    array(1)._1.set(0)

    array(1).copyFrom(array(0))

    assertEqualsDouble(array(1)._0.get.asInstanceOf[Float].toDouble, 10.0d, 0.0001)
    assertEquals(array(1)._1.get.asInstanceOf[Int], 128)

  private def assertEqualsDouble(actual: Double, expected: Double, delta: Double): Unit =
    assert(
      math.abs(actual - expected) <= delta,
      s"Expected ~$expected within $delta, got $actual"
    )
