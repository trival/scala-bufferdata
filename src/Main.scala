package example

import scala.scalajs.js
import scala.scalajs.js.annotation.JSExportTopLevel
import bufferdatav1.*
import example.bufferdatav2.BufferDataV2
import _root_.bufferdatav2.StructRef.*
import _root_.bufferdatav2.FieldRef.*

@main def app(): Unit =
  println("Hello from Scala.js!")
  println(s"Running on: ${Utils.platformInfo}")
  println(s"${Utils.greet("Developer")}")
  println(s"Current timestamp: ${Utils.timestamp}")

  // Demo buffer data structures
  println("\n--- BufferData v1 Demo ---")
  BufferDataDemo.runDemo()

  println("\n--- BufferData v2 Demo ---")
  BufferDataV2Demo.runDemo()

object BufferDataDemo:
  def runDemo(): Unit =
    // Define struct layout: (F32, U8) - 5 bytes total
    given layout: StructLayout = StructLayout(F32, U8)

    println(s"Creating array of 10 structs (F32, U8)")
    val particles = ArrayView.allocate(10)
    println(s"Array length: ${particles.length}")
    println(s"Struct size: ${layout.sizeInBytes} bytes")

    // Populate using typed accessors
    for i <- 0 until 10 do
      particles(i)._0.asF32.set(i.toFloat * 1.5f)
      particles(i)._1.asU8.set((i * 10).toShort)

    // Read back using typed accessors
    println("\nReading back values:")
    for i <- 0 until 10 do
      val f32Val = particles(i)._0.asF32.get
      val u8Val = particles(i)._1.asU8.get
      println(s"  particles($i): F32=$f32Val, U8=$u8Val")

  // Export to JavaScript for validation
  @JSExportTopLevel("createParticleBufferV1")
  def createParticleBuffer(count: Int): js.Object =
    given layout: StructLayout = StructLayout(F32, U8)
    val particles = ArrayView.allocate(count)

    // Initialize with sample data
    for i <- 0 until count do
      particles(i)._0.asF32.set(i.toFloat)
      particles(i)._1.asU8.set((i % 256).toShort)

    // Return a JS object with info
    js.Dynamic.literal(
      count = count,
      structSize = layout.sizeInBytes,
      totalBytes = count * layout.sizeInBytes,
      firstElement = js.Dynamic.literal(
        f32 = particles(0)._0.asF32.get,
        u8 = particles(0)._1.asU8.get
      ),
      lastElement = js.Dynamic.literal(
        f32 = particles(count - 1)._0.asF32.get,
        u8 = particles(count - 1)._1.asU8.get
      )
    )

object BufferDataV2Demo:
  private val schema = BufferDataV2.particle

  def runDemo(): Unit =
    val array = BufferDataV2.allocateParticles(10)
    BufferDataV2.populateParticles(array)

    println(s"V2 schema stride: ${schema.sizeInBytes} bytes")
    println("First three elements:")
    for i <- 0 until math.min(3, array.length) do
      val element = array(i)
      val f32Value = element._0.get.asInstanceOf[Float]
      val u8Value = element._1.get.asInstanceOf[Int]
      println(s"  [$i] f32=$f32Value u8=$u8Value")

  @JSExportTopLevel("createParticleBufferV2")
  def createBufferDataV2Particles(count: Int = 10): js.Object =
    val array = BufferDataV2.allocateParticles(count)
    BufferDataV2.populateParticles(array)
    if array.length == 0 then
      js.Dynamic.literal(count = 0, stride = schema.sizeInBytes)
    else
      js.Dynamic.literal(
        count = array.length,
        stride = schema.sizeInBytes,
        first = js.Dynamic.literal(
          f32 = array(0)._0.get.asInstanceOf[Float],
          u8 = array(0)._1.get.asInstanceOf[Int]
        ),
        last = js.Dynamic.literal(
          f32 = array(array.length - 1)._0.get.asInstanceOf[Float],
          u8 = array(array.length - 1)._1.get.asInstanceOf[Int]
        )
      )
