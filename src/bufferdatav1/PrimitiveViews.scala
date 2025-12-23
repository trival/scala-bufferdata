package bufferdatav1

import scala.scalajs.js.typedarray.{ArrayBuffer, DataView}

// F32View - Zero-allocation view type for Float32
opaque type F32View = BufferRef

object F32View:
  inline def apply(buffer: ArrayBuffer, offset: Int): F32View =
    BufferRef(buffer, offset)

  extension (view: F32View)
    inline def get: Float =
      val buffer = BufferRef.extractBuffer(view)
      val offset = BufferRef.extractOffset(view)
      val dataView = new DataView(buffer)
      dataView.getFloat32(offset, littleEndian = true)

    inline def set(value: Float): Unit =
      val buffer = BufferRef.extractBuffer(view)
      val offset = BufferRef.extractOffset(view)
      val dataView = new DataView(buffer)
      dataView.setFloat32(offset, value, littleEndian = true)

// U8View - Zero-allocation view type for Uint8
opaque type U8View = BufferRef

object U8View:
  inline def apply(buffer: ArrayBuffer, offset: Int): U8View =
    BufferRef(buffer, offset)

  extension (view: U8View)
    inline def get: Short =
      val buffer = BufferRef.extractBuffer(view)
      val offset = BufferRef.extractOffset(view)
      val dataView = new DataView(buffer)
      dataView.getUint8(offset)

    inline def set(value: Short): Unit =
      val buffer = BufferRef.extractBuffer(view)
      val offset = BufferRef.extractOffset(view)
      val dataView = new DataView(buffer)
      dataView.setUint8(offset, value)
