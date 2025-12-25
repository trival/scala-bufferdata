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
  // Phase 2: Struct Layout Tests (New Typed API)
  // ==========================================================================

  test("Typed struct computes correct size for (F32, U8)"):
    val layout = struct[(F32, U8)]
    assertEquals(layout.sizeInBytes, 5)

  test("Typed struct computes correct size for (F32, F32, U8)"):
    val layout = struct[(F32, F32, U8)]
    assertEquals(layout.sizeInBytes, 9)

  test("Typed struct size for multiple fields"):
    val layout = struct[(F32, U8, F64)]
    // F32 (4) + U8 (1) + F64 (8) = 13 bytes
    assertEquals(layout.sizeInBytes, 13)

  test("Typed struct field access verifies correct offsets"):
    // Offsets are computed at compile time via match types
    // F32 at offset 0, U8 at offset 4, F64 at offset 5
    val array = struct[(F32, U8, F64)].allocate(1)
    array(0)._0.set(1.0f)
    array(0)._1.set(2: Short)
    array(0)._2.set(3.0)

    assertEqualsFloat(array(0)._0.get, 1.0f, 0.001f)
    assertEquals(array(0)._1.get, 2.toShort)
    assertEqualsDouble(array(0)._2.get, 3.0, 0.001)

  // ==========================================================================
  // Phase 3: StructArray and StructRef Tests (Typed API)
  // ==========================================================================

  test("Typed struct.allocate creates correct buffer size"):
    val layout = struct[(F32, U8)]
    val array = layout.allocate(10)

    assertEquals(array.length, 10)
    assertEquals(array.arrayBuffer.byteLength, 50) // 10 * 5 bytes

  test("Typed StructRef indexed access with inferred types"):
    val layout = struct[(F32, U8)]
    val array = layout.allocate(1)

    // Write using typed accessors - no .asF32 needed!
    array(0)._0.set(42.5f)
    array(0)._1.set(200: Short)

    // Read back - types are inferred!
    val f32Val: Float = array(0)._0.get
    val u8Val: Short = array(0)._1.get
    assertEqualsFloat(f32Val, 42.5f, 0.001f)
    assertEquals(u8Val, 200.toShort)

  test("Typed StructArray indexing with multiple elements"):
    val layout = struct[(F32, U8)]
    val array = layout.allocate(100)

    // Write to various indices
    for i <- 0 until 100 do
      array(i)._0.set(i.toFloat * 2.0f)
      array(i)._1.set((i % 256).toShort)

    // Verify all values
    for i <- 0 until 100 do
      assertEqualsFloat(array(i)._0.get, i.toFloat * 2.0f, 0.001f)
      assertEquals(array(i)._1.get, (i % 256).toShort)

  test("Typed StructRef with 3 fields"):
    val layout = struct[(F32, F32, U8)]
    val array = layout.allocate(1)

    array(0)._0.set(1.0f)
    array(0)._1.set(2.0f)
    array(0)._2.set(3: Short)

    assertEqualsFloat(array(0)._0.get, 1.0f, 0.001f)
    assertEqualsFloat(array(0)._1.get, 2.0f, 0.001f)
    assertEquals(array(0)._2.get, 3.toShort)

  test("Typed struct with multiple primitive types"):
    val layout = struct[(F32, F64, U8, I32)]
    val array = layout.allocate(1)

    array(0)._0.set(1.5f)
    array(0)._1.set(2.5)
    array(0)._2.set(128: Short)
    array(0)._3.set(-1000)

    assertEqualsFloat(array(0)._0.get, 1.5f, 0.001f)
    assertEqualsDouble(array(0)._1.get, 2.5, 0.001)
    assertEquals(array(0)._2.get, 128.toShort)
    assertEquals(array(0)._3.get, -1000)

  // ==========================================================================
  // Phase 4: Single Struct Shorthand
  // ==========================================================================

  test("Typed struct() creates single struct"):
    val layout = struct[(F32, U8)]
    val single = layout()

    single._0.set(123.456f)
    single._1.set(42: Short)

    assertEqualsFloat(single._0.get, 123.456f, 0.001f)
    assertEquals(single._1.get, 42.toShort)

  // ==========================================================================
  // Phase 5: Nested Struct Support (Typed)
  // ==========================================================================

  test("Typed nested struct layout computes correct size"):
    type Vec2 = (F32, F32)
    type Particle = (Vec2, U8)

    val vec2Layout = struct[Vec2]
    val particleLayout = struct[Particle]

    assertEquals(vec2Layout.sizeInBytes, 8)
    assertEquals(particleLayout.sizeInBytes, 9)

  test("Typed nested struct field access"):
    type Vec2 = (F32, F32)
    type Particle = (Vec2, U8)

    val array = struct[Particle].allocate(1)

    // Access nested Vec2 fields through position - types inferred!
    array(0)._0._0.set(10.0f)  // position.x
    array(0)._0._1.set(20.0f)  // position.y
    array(0)._1.set(100: Short)  // life

    val x: Float = array(0)._0._0.get
    val y: Float = array(0)._0._1.get
    val life: Short = array(0)._1.get

    assertEqualsFloat(x, 10.0f, 0.001f)
    assertEqualsFloat(y, 20.0f, 0.001f)
    assertEquals(life, 100.toShort)

  test("Typed deeply nested structs"):
    type Vec2 = (F32, F32)
    type Transform = (Vec2, Vec2)  // position, velocity
    type Entity = (Transform, U8)  // transform, health

    val vec2Layout = struct[Vec2]
    val transformLayout = struct[Transform]
    val entityLayout = struct[Entity]

    assertEquals(vec2Layout.sizeInBytes, 8)
    assertEquals(transformLayout.sizeInBytes, 16)
    assertEquals(entityLayout.sizeInBytes, 17)

    val entities = entityLayout.allocate(1)
    entities(0)._0._0._0.set(1.0f)  // transform.position.x
    entities(0)._0._0._1.set(2.0f)  // transform.position.y
    entities(0)._0._1._0.set(3.0f)  // transform.velocity.x
    entities(0)._0._1._1.set(4.0f)  // transform.velocity.y
    entities(0)._1.set(255: Short)  // health

    assertEqualsFloat(entities(0)._0._0._0.get, 1.0f, 0.001f)
    assertEqualsFloat(entities(0)._0._0._1.get, 2.0f, 0.001f)
    assertEqualsFloat(entities(0)._0._1._0.get, 3.0f, 0.001f)
    assertEqualsFloat(entities(0)._0._1._1.get, 4.0f, 0.001f)
    assertEquals(entities(0)._1.get, 255.toShort)

  // ==========================================================================
  // Phase 6: copyFrom and sliceBuffer
  // ==========================================================================

  test("Typed StructRef.copyFrom copies data correctly"):
    val layout = struct[(F32, U8)]
    val array = layout.allocate(2)

    // Set up source
    array(0)._0.set(99.9f)
    array(0)._1.set(77: Short)

    // Copy to destination
    array(1).copyFrom(array(0))

    // Verify copy
    assertEqualsFloat(array(1)._0.get, 99.9f, 0.001f)
    assertEquals(array(1)._1.get, 77.toShort)

  test("Typed StructRef.sliceBuffer creates independent buffer"):
    val layout = struct[(F32, U8)]
    val array = layout.allocate(1)

    array(0)._0.set(123.0f)
    array(0)._1.set(45: Short)

    // Extract slice
    val slice = array(0).sliceBuffer

    assertEquals(slice.byteLength, 5)

    // Verify data in slice
    val sliceView = new DataView(slice)
    assertEqualsFloat(sliceView.getFloat32(0, true), 123.0f, 0.001f)
    assertEquals(sliceView.getUint8(4), 45.toShort)

  test("Typed FieldRef.sliceBuffer for nested struct"):
    type Vec2 = (F32, F32)
    type Particle = (Vec2, U8)

    val particle = struct[Particle]()

    particle._0._0.set(10.0f)
    particle._0._1.set(20.0f)

    // Extract just the Vec2 portion
    val vec2Slice = particle._0.sliceBuffer

    assertEquals(vec2Slice.byteLength, 8)

    val sliceView = new DataView(vec2Slice)
    assertEqualsFloat(sliceView.getFloat32(0, true), 10.0f, 0.001f)
    assertEqualsFloat(sliceView.getFloat32(4, true), 20.0f, 0.001f)

  test("Typed get arrayBuffer from StructArray"):
    val layout = struct[(F32, U8)]
    val array = layout.allocate(10)

    val rawBuffer = array.arrayBuffer
    assertEquals(rawBuffer.byteLength, 50)

  // ==========================================================================
  // Phase 7: Named Field Access via Extensions
  // ==========================================================================
  //
  // Recommended approach: simple inline extensions on unnamed tuples.
  // This is zero-cost and more concise than any macro-based approach.

  // Define types
  type Vec2 = (F32, F32)
  type Particle = (Vec2, U8)
  type Transform = (Vec2, Vec2)  // position, velocity
  type Entity = (Transform, U8)  // transform, health

  // Extensions for Vec2 - only need StructRef since nested access returns StructRef!
  extension (v: StructRef[Vec2])
    inline def x = v._0
    inline def y = v._1

  // Extensions for Particle
  extension (p: StructRef[Particle])
    inline def pos = p._0
    inline def life = p._1

  // Extensions for Transform - only need StructRef
  extension (t: StructRef[Transform])
    inline def position = t._0
    inline def velocity = t._1

  // Extensions for Entity
  extension (e: StructRef[Entity])
    inline def transform = e._0
    inline def health = e._1

  test("Named extensions on single struct"):
    val v = struct[Vec2]()

    v.x.set(10.0f)
    v.y.set(20.0f)

    assertEqualsFloat(v.x.get, 10.0f, 0.001f)
    assertEqualsFloat(v.y.get, 20.0f, 0.001f)

  test("Named extensions with nested struct"):
    val p = struct[Particle]()

    p.pos.x.set(100.0f)
    p.pos.y.set(200.0f)
    p.life.set(255: Short)

    assertEqualsFloat(p.pos.x.get, 100.0f, 0.001f)
    assertEqualsFloat(p.pos.y.get, 200.0f, 0.001f)
    assertEquals(p.life.get, 255.toShort)

  test("Named extensions with deeply nested struct"):
    val e = struct[Entity]()

    e.transform.position.x.set(1.0f)
    e.transform.position.y.set(2.0f)
    e.transform.velocity.x.set(3.0f)
    e.transform.velocity.y.set(4.0f)
    e.health.set(100: Short)

    assertEqualsFloat(e.transform.position.x.get, 1.0f, 0.001f)
    assertEqualsFloat(e.transform.position.y.get, 2.0f, 0.001f)
    assertEqualsFloat(e.transform.velocity.x.get, 3.0f, 0.001f)
    assertEqualsFloat(e.transform.velocity.y.get, 4.0f, 0.001f)
    assertEquals(e.health.get, 100.toShort)

  test("Named extensions with array access"):
    val particles = struct[Particle].allocate(100)

    for i <- 0 until 100 do
      particles(i).pos.x.set(i.toFloat)
      particles(i).pos.y.set(i.toFloat * 2)
      particles(i).life.set((i % 256).toShort)

    // Verify values
    assertEqualsFloat(particles(0).pos.x.get, 0.0f, 0.001f)
    assertEqualsFloat(particles(50).pos.x.get, 50.0f, 0.001f)
    assertEqualsFloat(particles(50).pos.y.get, 100.0f, 0.001f)
    assertEquals(particles(99).life.get, 99.toShort)

  test("Named extensions types are inferred correctly"):
    val p = struct[Particle]()

    p.pos.x.set(42.0f)
    p.pos.y.set(84.0f)
    p.life.set(128: Short)

    // Types should be inferred without casts
    val xVal: Float = p.pos.x.get
    val yVal: Float = p.pos.y.get
    val lifeVal: Short = p.life.get

    assertEqualsFloat(xVal, 42.0f, 0.001f)
    assertEqualsFloat(yVal, 84.0f, 0.001f)
    assertEquals(lifeVal, 128.toShort)

  test("Named extensions mixed with index access"):
    val p = struct[Particle]()

    // Can mix named and index-based access
    p.pos.x.set(10.0f)      // named
    p._0._1.set(20.0f)      // index-based for y
    p.life.set(50: Short)   // named

    assertEqualsFloat(p.pos.x.get, 10.0f, 0.001f)
    assertEqualsFloat(p.pos.y.get, 20.0f, 0.001f)  // read via named
    assertEqualsFloat(p._0._1.get, 20.0f, 0.001f)  // same value via index
    assertEquals(p.life.get, 50.toShort)

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
