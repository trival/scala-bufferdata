package bufferdatav1

import scala.scalajs.js.typedarray.{ArrayBuffer, DataView}

// =============================================================================
// Primitive Types with compile-time size information
// =============================================================================

sealed trait PrimitiveType:
  def byteSize: Int

case object F32 extends PrimitiveType:
  inline val byteSize = 4

case object F64 extends PrimitiveType:
  inline val byteSize = 8

case object U8 extends PrimitiveType:
  inline val byteSize = 1

case object U16 extends PrimitiveType:
  inline val byteSize = 2

case object U32 extends PrimitiveType:
  inline val byteSize = 4

case object I8 extends PrimitiveType:
  inline val byteSize = 1

case object I16 extends PrimitiveType:
  inline val byteSize = 2

case object I32 extends PrimitiveType:
  inline val byteSize = 4

// =============================================================================
// Primitive Views (Opaque Types) - ZERO COST
// =============================================================================

opaque type F32View = (DataView, Int)
object F32View:
  inline def apply(view: DataView, offset: Int): F32View = (view, offset)
  extension (v: F32View)
    inline def get: Float = v._1.getFloat32(v._2, littleEndian = true)
    inline def set(value: Float): Unit = v._1.setFloat32(v._2, value, littleEndian = true)

opaque type F64View = (DataView, Int)
object F64View:
  inline def apply(view: DataView, offset: Int): F64View = (view, offset)
  extension (v: F64View)
    inline def get: Double = v._1.getFloat64(v._2, littleEndian = true)
    inline def set(value: Double): Unit = v._1.setFloat64(v._2, value, littleEndian = true)

opaque type U8View = (DataView, Int)
object U8View:
  inline def apply(view: DataView, offset: Int): U8View = (view, offset)
  extension (v: U8View)
    inline def get: Short = v._1.getUint8(v._2)
    inline def set(value: Short): Unit = v._1.setUint8(v._2, value)

opaque type U16View = (DataView, Int)
object U16View:
  inline def apply(view: DataView, offset: Int): U16View = (view, offset)
  extension (v: U16View)
    inline def get: Int = v._1.getUint16(v._2, littleEndian = true)
    inline def set(value: Int): Unit = v._1.setUint16(v._2, value, littleEndian = true)

opaque type U32View = (DataView, Int)
object U32View:
  inline def apply(view: DataView, offset: Int): U32View = (view, offset)
  extension (v: U32View)
    inline def get: Double = v._1.getUint32(v._2, littleEndian = true)
    inline def set(value: Double): Unit = v._1.setUint32(v._2, value, littleEndian = true)

opaque type I8View = (DataView, Int)
object I8View:
  inline def apply(view: DataView, offset: Int): I8View = (view, offset)
  extension (v: I8View)
    inline def get: Byte = v._1.getInt8(v._2)
    inline def set(value: Byte): Unit = v._1.setInt8(v._2, value)

opaque type I16View = (DataView, Int)
object I16View:
  inline def apply(view: DataView, offset: Int): I16View = (view, offset)
  extension (v: I16View)
    inline def get: Short = v._1.getInt16(v._2, littleEndian = true)
    inline def set(value: Short): Unit = v._1.setInt16(v._2, value, littleEndian = true)

opaque type I32View = (DataView, Int)
object I32View:
  inline def apply(view: DataView, offset: Int): I32View = (view, offset)
  extension (v: I32View)
    inline def get: Int = v._1.getInt32(v._2, littleEndian = true)
    inline def set(value: Int): Unit = v._1.setInt32(v._2, value, littleEndian = true)

// =============================================================================
// StructLayout with precomputed offsets
// Offsets are stored directly, not in a Vector, for better inlining
// =============================================================================

final class StructLayout(
    val sizeInBytes: Int,
    val offset0: Int,
    val offset1: Int,
    val offset2: Int,
    val offset3: Int
)

object StructLayout:
  def apply(p0: PrimitiveType): StructLayout =
    new StructLayout(p0.byteSize, 0, 0, 0, 0)

  def apply(p0: PrimitiveType, p1: PrimitiveType): StructLayout =
    val o1 = p0.byteSize
    new StructLayout(o1 + p1.byteSize, 0, o1, 0, 0)

  def apply(p0: PrimitiveType, p1: PrimitiveType, p2: PrimitiveType): StructLayout =
    val o1 = p0.byteSize
    val o2 = o1 + p1.byteSize
    new StructLayout(o2 + p2.byteSize, 0, o1, o2, 0)

  def apply(p0: PrimitiveType, p1: PrimitiveType, p2: PrimitiveType, p3: PrimitiveType): StructLayout =
    val o1 = p0.byteSize
    val o2 = o1 + p1.byteSize
    val o3 = o2 + p2.byteSize
    new StructLayout(o3 + p3.byteSize, 0, o1, o2, o3)

// =============================================================================
// StructView - OPAQUE TYPE for zero-cost struct access
// Erases to (DataView, Int) - just view + baseOffset
// =============================================================================

opaque type StructView = (DataView, Int)

object StructView:
  inline def apply(view: DataView, baseOffset: Int): StructView = (view, baseOffset)

  extension (s: StructView)
    inline def dataView: DataView = s._1
    inline def baseOffset: Int = s._2

    /** Field accessors - add layout's precomputed offset to base */
    inline def _0(using inline layout: StructLayout): (DataView, Int) =
      (s._1, s._2 + layout.offset0)

    inline def _1(using inline layout: StructLayout): (DataView, Int) =
      (s._1, s._2 + layout.offset1)

    inline def _2(using inline layout: StructLayout): (DataView, Int) =
      (s._1, s._2 + layout.offset2)

    inline def _3(using inline layout: StructLayout): (DataView, Int) =
      (s._1, s._2 + layout.offset3)

// =============================================================================
// ArrayView - OPAQUE TYPE for zero-cost array access
// =============================================================================

opaque type ArrayView = (ArrayBuffer, DataView, Int) // buffer, view, stride

object ArrayView:
  def allocate(count: Int)(using layout: StructLayout): ArrayView =
    val totalBytes = count * layout.sizeInBytes
    val buffer = new ArrayBuffer(totalBytes)
    val dataView = new DataView(buffer)
    (buffer, dataView, layout.sizeInBytes)

  extension (arr: ArrayView)
    inline def buffer: ArrayBuffer = arr._1
    inline def dataView: DataView = arr._2
    inline def stride: Int = arr._3

    inline def length: Int =
      if arr._3 == 0 then 0
      else arr._1.byteLength / arr._3

    inline def apply(index: Int): StructView =
      StructView(arr._2, index * arr._3)

    def arrayBuffer: ArrayBuffer = arr._1

// =============================================================================
// Field Reference Extensions - convert (DataView, Int) to typed views
// =============================================================================

extension (ref: (DataView, Int))
  inline def asF32: F32View = F32View(ref._1, ref._2)
  inline def asF64: F64View = F64View(ref._1, ref._2)
  inline def asU8: U8View = U8View(ref._1, ref._2)
  inline def asU16: U16View = U16View(ref._1, ref._2)
  inline def asU32: U32View = U32View(ref._1, ref._2)
  inline def asI8: I8View = I8View(ref._1, ref._2)
  inline def asI16: I16View = I16View(ref._1, ref._2)
  inline def asI32: I32View = I32View(ref._1, ref._2)
