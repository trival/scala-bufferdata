package bufferdatav2

import scala.scalajs.js.typedarray.{ArrayBuffer, DataView}

final class StructArray private (val schema: StructSchema, private val buffer: ArrayBuffer):
  private val view = new DataView(buffer)

  def length: Int =
    if schema.stride == 0 then 0 else buffer.byteLength / schema.stride

  def apply(index: Int): StructInstance =
    if index < 0 || index >= length then
      throw IndexOutOfBoundsException(s"Struct index $index outside 0 until $length")

    StructInstance(schema, view, index * schema.stride)

  def rawBuffer: ArrayBuffer = buffer

object StructArray:
  def allocate(schema: StructSchema, count: Int): StructArray =
    require(count >= 0, "Count must be non-negative")
    val totalBytes = schema.stride * count
    val buffer = new ArrayBuffer(totalBytes)
    new StructArray(schema, buffer)

final class StructInstance private[bufferdatav2] (
    schema: StructSchema,
    view: DataView,
    baseOffset: Int
):
  private def offsetFor(fieldIndex: Int): Int =
    baseOffset + schema.fieldOffset(fieldIndex)

  private def ensureKind(fieldIndex: Int, expected: PrimitiveKind): Unit =
    val actual = schema.fieldKind(fieldIndex)
    require(
      actual == expected,
      s"Field $fieldIndex expected $expected but schema stores $actual"
    )

  def getFloat32(fieldIndex: Int): Float =
    ensureKind(fieldIndex, PrimitiveKind.F32)
    view.getFloat32(offsetFor(fieldIndex), littleEndian = true)

  def setFloat32(fieldIndex: Int, value: Float): Unit =
    ensureKind(fieldIndex, PrimitiveKind.F32)
    view.setFloat32(offsetFor(fieldIndex), value, littleEndian = true)

  def getUint8(fieldIndex: Int): Int =
    ensureKind(fieldIndex, PrimitiveKind.U8)
    view.getUint8(offsetFor(fieldIndex))

  def setUint8(fieldIndex: Int, value: Int): Unit =
    ensureKind(fieldIndex, PrimitiveKind.U8)
    require(value >= 0 && value <= 0xFF, s"Uint8 value must be 0-255, got $value")
    view.setUint8(offsetFor(fieldIndex), value.toShort)
