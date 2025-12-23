package bufferdatav2

object BufferDataV2:
  val particleSchema: StructSchema =
    StructSchema(PrimitiveKind.F32, PrimitiveKind.U8)

  def allocateParticles(count: Int): StructArray =
    StructArray.allocate(particleSchema, count)

  def populateParticles(array: StructArray): Unit =
    for i <- 0 until array.length do
      val element = array(i)
      element.setFloat32(0, i.toFloat * 2.0f)
      element.setUint8(1, (i * 3) % 256)
