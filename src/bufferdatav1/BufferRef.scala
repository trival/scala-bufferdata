package bufferdatav1

import scala.scalajs.js.typedarray.{ArrayBuffer, DataView}

// Opaque type encoding buffer + offset
opaque type BufferRef = (ArrayBuffer, Int)

object BufferRef:
  inline def apply(buffer: ArrayBuffer, offset: Int): BufferRef =
    (buffer, offset)

  inline def extractBuffer(ref: BufferRef): ArrayBuffer =
    ref._1

  inline def extractOffset(ref: BufferRef): Int =
    ref._2

  inline def extractView(ref: BufferRef): DataView =
    new DataView(ref._1)
