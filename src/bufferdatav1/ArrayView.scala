package bufferdatav1

import scala.scalajs.js.typedarray.ArrayBuffer

// Opaque type for array of structs
opaque type ArrayView = BufferRef

object ArrayView:
  def allocate(count: Int)(using layout: StructLayout): ArrayView =
    val totalBytes = count * layout.sizeInBytes
    val buffer = new ArrayBuffer(totalBytes)
    BufferRef(buffer, 0)

  extension (arr: ArrayView)(using layout: StructLayout)
    inline def apply(index: Int): StructView =
      val buffer = BufferRef.extractBuffer(arr)
      val baseOffset = BufferRef.extractOffset(arr)
      val stride = layout.sizeInBytes
      val elementOffset = baseOffset + (index * stride)
      StructView(buffer, elementOffset)

    def length: Int =
      val buffer = BufferRef.extractBuffer(arr)
      buffer.byteLength / layout.sizeInBytes
