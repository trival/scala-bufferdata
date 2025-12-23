package bufferdatav2

import scala.scalajs.js.typedarray.DataView

enum PrimitiveKind(val byteSize: Int):
  case F32 extends PrimitiveKind(4)
  case U8 extends PrimitiveKind(1)

  // Minimal helpers so StructInstance logic stays centralized
  def read(view: DataView, offset: Int): Any = this match
    case F32 => view.getFloat32(offset, littleEndian = true)
    case U8 => view.getUint8(offset)

  def write(view: DataView, offset: Int, value: Any): Unit = this match
    case F32 => view.setFloat32(offset, value.asInstanceOf[Float], littleEndian = true)
    case U8 => view.setUint8(offset, value.asInstanceOf[Int].toShort)
