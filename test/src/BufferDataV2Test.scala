package bufferdatav2

import munit.FunSuite

class BufferDataV2Test extends FunSuite:
  private val schema = StructSchema(PrimitiveKind.F32, PrimitiveKind.U8)

  test("schema computes stride and offsets for (F32, U8)"):
    assertEquals(schema.stride, 5)
    assertEquals(schema.fieldOffset(0), 0)
    assertEquals(schema.fieldOffset(1), 4)

  test("allocateParticles should create buffers with requested length"):
    val array = BufferDataV2.allocateParticles(10)
    assertEquals(array.length, 10)

  test("populateParticles writes distinct values we can read back"):
    val array = BufferDataV2.allocateParticles(10)
    BufferDataV2.populateParticles(array)

    val element = array(5)
    assertEqualsDouble(element.getFloat32(0).toDouble, 10.0d, 0.0001)
    assertEquals(element.getUint8(1), (5 * 3) % 256)

  private def assertEqualsDouble(actual: Double, expected: Double, delta: Double): Unit =
    assert(
      math.abs(actual - expected) <= delta,
      s"Expected ~$expected within $delta, but got $actual"
    )
