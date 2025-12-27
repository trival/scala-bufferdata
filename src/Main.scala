package example

import scala.scalajs.js
import scala.scalajs.js.annotation.JSExportTopLevel
import bufferdata.*

@main def app(): Unit =
  println("Hello from Scala.js!")
  println(s"Running on: ${Utils.platformInfo}")
  println(s"${Utils.greet("Developer")}")
  println(s"Current timestamp: ${Utils.timestamp}")

  // Demo buffer data structures
  println("\n--- BufferData Demo ---")
  BufferDataDemo.runDemo()
  println("\n--- BufferData createParticles ---")
  val jsData = BufferDataDemo.createParticleBuffer(5)
  println("Created particle buffer:")
  println(js.JSON.stringify(jsData, space = 2))

object BufferDataDemo:
  def runDemo(): Unit =
    // Define struct layout using new typed API: (F32, U8) - 5 bytes total
    val layout = struct[(F32, U8)]

    println(s"Creating array of 10 structs (F32, U8)")
    val particles = layout.allocate(10)
    println(s"Array length: ${particles.length}")
    println(s"Struct size: ${layout.sizeInBytes} bytes")

    // Populate using typed accessors - no .asF32 needed!
    for i <- 0 until 10 do
      particles(i)(0).set(i.toFloat * 1.5f)
      particles(i)(1).set((i * 10).toShort)

    // Read back using typed accessors - types inferred!
    println("\nReading back values:")
    for i <- 0 until 10 do
      val f32Val = particles(i)(0).get
      val u8Val = particles(i)(1).get
      println(s"  particles($i): F32=$f32Val, U8=$u8Val")

  // Export to JavaScript for validation
  @JSExportTopLevel("createParticleBuffer")
  def createParticleBuffer(count: Int): js.Object =
    val layout = struct[(F32, U8)]
    val particles = layout.allocate(count)

    // Initialize with sample data
    for i <- 0 until count do
      particles(i)(0).set(i.toFloat)
      particles(i)(1).set((i % 256).toShort)

    // Return a JS object with info
    js.Dynamic.literal(
      count = count,
      structSize = layout.sizeInBytes,
      totalBytes = count * layout.sizeInBytes,
      firstElement = js.Dynamic.literal(
        f32 = particles(0)(0).get,
        u8 = particles(0)(1).get
      ),
      lastElement = js.Dynamic.literal(
        f32 = particles(count - 1)(0).get,
        u8 = particles(count - 1)(1).get
      )
    )
