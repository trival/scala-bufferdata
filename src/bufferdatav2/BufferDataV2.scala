package bufferdatav2

import BinaryPrimitive.{F32, U8}

object BufferDataV2:
  val particleSchema: StructLayout = struct(F32, U8)
  val particleLayout: StructLayout = particleSchema

  def allocateParticles(count: Int): StructArray =
    particleSchema.allocate(count)

  def singleParticle(): StructView =
    particleSchema()

  def populateParticles(array: StructArray): Unit =
    for i <- 0 until array.length do
      val view = array(i)
      view._0.set(i.toFloat * 2.0f)
      view._1.set((i * 7) % 256)
