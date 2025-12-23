package bufferdatav1

import munit.FunSuite
import scala.scalajs.js.typedarray.ArrayBuffer

class BufferDataTest extends FunSuite:
  test("F32View should read and write Float32 values"):
    val buffer = new ArrayBuffer(4)
    val view = F32View(buffer, 0)

    view.set(3.14f)
    val result = view.get

    assert(math.abs(result - 3.14f) < 0.001f, s"Expected ~3.14, got $result")

  test("U8View should read and write Uint8 values"):
    val buffer = new ArrayBuffer(1)
    val view = U8View(buffer, 0)

    view.set(255.toShort)
    val result = view.get

    assertEquals(result, 255.toShort)

  test("StructLayout should compute correct size and offsets for (F32, U8)"):
    given layout: StructLayout = StructLayout(F32, U8)

    assertEquals(layout.sizeInBytes, 5, "F32 (4 bytes) + U8 (1 byte) = 5 bytes")
    assertEquals(layout.fieldOffsets, List(0, 4), "F32 at offset 0, U8 at offset 4")

  test("StructView should provide indexed access to fields"):
    given layout: StructLayout = StructLayout(F32, U8)

    val buffer = new ArrayBuffer(layout.sizeInBytes)
    val structView = StructView(buffer, 0)

    // Write values
    structView._0.set(42.5f)
    structView._1.set(128.toShort)

    // Read values back
    val f32Value = structView._0.get
    val u8Value = structView._1.get

    assert(math.abs(f32Value - 42.5f) < 0.001f, s"Expected ~42.5, got $f32Value")
    assertEquals(u8Value, 128.toShort)

  test("ArrayView should allocate buffer for 10 structs"):
    given layout: StructLayout = StructLayout(F32, U8)

    val array = ArrayView.allocate(10)

    assertEquals(array.length, 10)

  test("ArrayView should provide indexed access to structs"):
    given layout: StructLayout = StructLayout(F32, U8)

    val array = ArrayView.allocate(10)

    // Write to different elements
    array(0)._0.set(1.0f)
    array(0)._1.set(10.toShort)

    array(5)._0.set(5.5f)
    array(5)._1.set(55.toShort)

    array(9)._0.set(9.9f)
    array(9)._1.set(99.toShort)

    // Read back and verify
    assert(math.abs(array(0)._0.get - 1.0f) < 0.001f)
    assertEquals(array(0)._1.get, 10.toShort)

    assert(math.abs(array(5)._0.get - 5.5f) < 0.001f)
    assertEquals(array(5)._1.get, 55.toShort)

    assert(math.abs(array(9)._0.get - 9.9f) < 0.001f)
    assertEquals(array(9)._1.get, 99.toShort)

  test("Complete POC workflow - create, populate, and read struct array"):
    given layout: StructLayout = StructLayout(F32, U8)

    // Allocate array of 10 structs
    val particles = ArrayView.allocate(10)

    // Populate with data
    for i <- 0 until 10 do
      particles(i)._0.set(i.toFloat * 1.5f)
      particles(i)._1.set((i * 10).toShort)

    // Verify data
    for i <- 0 until 10 do
      val expectedF32 = i.toFloat * 1.5f
      val expectedU8 = (i * 10).toShort

      val actualF32 = particles(i)._0.get
      val actualU8 = particles(i)._1.get

      assert(
        math.abs(actualF32 - expectedF32) < 0.001f,
        s"Element $i: Expected F32 ~$expectedF32, got $actualF32"
      )
      assertEquals(
        actualU8,
        expectedU8,
        s"Element $i: Expected U8 $expectedU8, got $actualU8"
      )
