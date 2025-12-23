package bufferdatav1

import scala.scalajs.js.typedarray.DataView

enum PrimitiveType(val byteSize: Int, val alignmentBytes: Int):
  case F32 extends PrimitiveType(4, 4)
  case U8 extends PrimitiveType(1, 1)

  inline def readerName: String = this match
    case F32 => "getFloat32"
    case U8 => "getUint8"

  inline def writerName: String = this match
    case F32 => "setFloat32"
    case U8 => "setUint8"

  inline def read(view: DataView, offset: Int): Any = this match
    case F32 => view.getFloat32(offset, littleEndian = true)
    case U8 => view.getUint8(offset)

  inline def write(view: DataView, offset: Int, value: Any): Unit = this match
    case F32 => view.setFloat32(offset, value.asInstanceOf[Float], littleEndian = true)
    case U8 => view.setUint8(offset, value.asInstanceOf[Short])
