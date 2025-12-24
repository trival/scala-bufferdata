package example.bufferdatav2

import _root_.bufferdatav2.*
import _root_.bufferdatav2.StructRef.*
import _root_.bufferdatav2.FieldRef.*

object BufferDataV2:
  type ParticleSchema = (F32, U8)
  private val particleStruct: Schema[ParticleSchema] = schema[ParticleSchema]

  def particle: Schema[ParticleSchema] = particleStruct

  def allocateParticles(count: Int): StructArray[ParticleSchema] =
    particleStruct.allocate(count)

  def singleParticle(): StructRef =
    particleStruct()

  def populateParticles(array: StructArray[ParticleSchema]): Unit =
    for i <- 0 until array.length do
      val view = array(i)
      view._0.set(i.toFloat * 2.0f)
      view._1.set((i * 7) % 256)
