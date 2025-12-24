package bufferdatav1

import munit.FunSuite
import scala.scalajs.js.typedarray.{ArrayBuffer, DataView}

class BufferDataV1Test extends FunSuite:

  // ==========================================================================
  // Phase 1: Primitive View Tests
  // ==========================================================================

  test("F32View get/set round-trip"):
    val buffer = new ArrayBuffer(4)
    val view = new DataView(buffer)
    val f32 = F32View(view, 0)

    f32.set(3.14159f)
    assertEqualsFloat(f32.get, 3.14159f, 0.00001f)

  test("F64View get/set round-trip"):
    val buffer = new ArrayBuffer(8)
    val view = new DataView(buffer)
    val f64 = F64View(view, 0)

    f64.set(2.718281828)
    assertEqualsDouble(f64.get, 2.718281828, 0.0000001)

  test("U8View get/set round-trip"):
    val buffer = new ArrayBuffer(1)
    val view = new DataView(buffer)
    val u8 = U8View(view, 0)

    u8.set(255)
    assertEquals(u8.get, 255.toShort)

  test("U16View get/set round-trip"):
    val buffer = new ArrayBuffer(2)
    val view = new DataView(buffer)
    val u16 = U16View(view, 0)

    u16.set(65535)
    assertEquals(u16.get, 65535)

  test("U32View get/set round-trip"):
    val buffer = new ArrayBuffer(4)
    val view = new DataView(buffer)
    val u32 = U32View(view, 0)

    u32.set(4294967295.0)
    assertEqualsDouble(u32.get, 4294967295.0, 0.1)

  test("I8View get/set round-trip"):
    val buffer = new ArrayBuffer(1)
    val view = new DataView(buffer)
    val i8 = I8View(view, 0)

    i8.set(-128)
    assertEquals(i8.get, (-128).toByte)

  test("I16View get/set round-trip"):
    val buffer = new ArrayBuffer(2)
    val view = new DataView(buffer)
    val i16 = I16View(view, 0)

    i16.set(-32768)
    assertEquals(i16.get, (-32768).toShort)

  test("I32View get/set round-trip"):
    val buffer = new ArrayBuffer(4)
    val view = new DataView(buffer)
    val i32 = I32View(view, 0)

    i32.set(-2147483648)
    assertEquals(i32.get, -2147483648)

  // ==========================================================================
  // Phase 2: Struct Layout Tests
  // ==========================================================================

  test("StructLayout computes correct size for (F32, U8)"):
    val layout = StructLayout(F32, U8)
    assertEquals(layout.sizeInBytes, 5)

  test("StructLayout computes correct size for (F32, F32, U8)"):
    val layout = StructLayout(F32, F32, U8)
    assertEquals(layout.sizeInBytes, 9)

  test("StructLayout computes correct field offsets"):
    val layout = StructLayout(F32, U8, F64)
    assertEquals(layout.offset0, 0)
    assertEquals(layout.offset1, 4)
    assertEquals(layout.offset2, 5)

  // ==========================================================================
  // Phase 3: ArrayView and StructView Tests (Zero-Cost)
  // ==========================================================================

  test("ArrayView allocate creates correct buffer size"):
    given layout: StructLayout = StructLayout(F32, U8)
    val array = ArrayView.allocate(10)

    assertEquals(array.length, 10)
    assertEquals(array.buffer.byteLength, 50) // 10 * 5 bytes

  test("StructView indexed access with typed views"):
    given layout: StructLayout = StructLayout(F32, U8)
    val array = ArrayView.allocate(1)

    // Write using typed accessors
    array(0)._0.asF32.set(42.5f)
    array(0)._1.asU8.set(200)

    // Read back
    assertEqualsFloat(array(0)._0.asF32.get, 42.5f, 0.001f)
    assertEquals(array(0)._1.asU8.get, 200.toShort)

  test("ArrayView indexing with multiple elements"):
    given layout: StructLayout = StructLayout(F32, U8)
    val array = ArrayView.allocate(100)

    // Write to various indices
    for i <- 0 until 100 do
      array(i)._0.asF32.set(i.toFloat * 2.0f)
      array(i)._1.asU8.set((i % 256).toShort)

    // Verify all values
    for i <- 0 until 100 do
      assertEqualsFloat(array(i)._0.asF32.get, i.toFloat * 2.0f, 0.001f)
      assertEquals(array(i)._1.asU8.get, (i % 256).toShort)

  test("StructView with 3 fields"):
    given layout: StructLayout = StructLayout(F32, F32, U8)
    val array = ArrayView.allocate(1)

    array(0)._0.asF32.set(1.0f)
    array(0)._1.asF32.set(2.0f)
    array(0)._2.asU8.set(3)

    assertEqualsFloat(array(0)._0.asF32.get, 1.0f, 0.001f)
    assertEqualsFloat(array(0)._1.asF32.get, 2.0f, 0.001f)
    assertEquals(array(0)._2.asU8.get, 3.toShort)

  test("Multiple primitive types in struct"):
    given layout: StructLayout = StructLayout(F32, F64, U8, I32)
    val array = ArrayView.allocate(1)

    array(0)._0.asF32.set(1.5f)
    array(0)._1.asF64.set(2.5)
    array(0)._2.asU8.set(128)
    array(0)._3.asI32.set(-1000)

    assertEqualsFloat(array(0)._0.asF32.get, 1.5f, 0.001f)
    assertEqualsDouble(array(0)._1.asF64.get, 2.5, 0.001)
    assertEquals(array(0)._2.asU8.get, 128.toShort)
    assertEquals(array(0)._3.asI32.get, -1000)

  // ==========================================================================
  // Helper methods
  // ==========================================================================

  private def assertEqualsFloat(actual: Float, expected: Float, delta: Float): Unit =
    assert(
      math.abs(actual - expected) <= delta,
      s"Expected ~$expected within $delta, got $actual"
    )

  private def assertEqualsDouble(actual: Double, expected: Double, delta: Double): Unit =
    assert(
      math.abs(actual - expected) <= delta,
      s"Expected ~$expected within $delta, got $actual"
    )
