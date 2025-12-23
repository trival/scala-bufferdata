package bufferdatav1

import scala.scalajs.js.typedarray.ArrayBuffer

// Simple struct layout for POC - hardcoded for (F32, U8)
// Future: make this generic using inline recursion on tuples
trait StructLayout:
  def sizeInBytes: Int
  def fieldOffsets: List[Int]
  def fieldTypes: List[PrimitiveType]

// Concrete layout for (F32, U8) struct
class SimpleStructLayout(val fieldTypes: List[PrimitiveType]) extends StructLayout:
  // Compute offsets with alignment
  val fieldOffsets: List[Int] =
    if fieldTypes.isEmpty then List()
    else
      fieldTypes.tail.foldLeft(List(0)) { (offsets, fieldType) =>
        val lastOffset = offsets.last
        val lastTypeIdx = offsets.size - 1
        val lastSize = fieldTypes(lastTypeIdx).byteSize
        val nextOffset = lastOffset + lastSize
        // Align to field's alignment requirement
        val aligned = ((nextOffset + fieldType.alignmentBytes - 1) / fieldType.alignmentBytes) * fieldType.alignmentBytes
        offsets :+ aligned
      }

  val sizeInBytes: Int =
    if fieldOffsets.isEmpty then 0
    else
      val lastIdx = fieldOffsets.size - 1
      fieldOffsets(lastIdx) + fieldTypes(lastIdx).byteSize

object StructLayout:
  // Simple constructor for POC
  def apply(types: PrimitiveType*): StructLayout =
    new SimpleStructLayout(types.toList)
