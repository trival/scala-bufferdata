package bufferdatav1

import scala.scalajs.js.typedarray.ArrayBuffer

// Opaque type for struct view
opaque type StructView = BufferRef

object StructView:
  inline def apply(buffer: ArrayBuffer, offset: Int): StructView =
    BufferRef(buffer, offset)

  extension (view: StructView)(using layout: StructLayout)
    // Indexed field accessors
    inline def _0: F32View =
      val buffer = BufferRef.extractBuffer(view)
      val baseOffset = BufferRef.extractOffset(view)
      F32View(buffer, baseOffset + layout.fieldOffsets(0))

    inline def _1: U8View =
      val buffer = BufferRef.extractBuffer(view)
      val baseOffset = BufferRef.extractOffset(view)
      U8View(buffer, baseOffset + layout.fieldOffsets(1))
