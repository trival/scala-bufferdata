package bufferdatav1

import scala.scalajs.js.typedarray.{ArrayBuffer, DataView, Uint8Array}
import scala.scalajs.js.Dynamic.literal

// =============================================================================
// Primitive Types as Scala 3 Enum with compile-time size information
// =============================================================================

enum PrimitiveType(val byteSize: Int):
  case F32 extends PrimitiveType(4)
  case F64 extends PrimitiveType(8)
  case U8 extends PrimitiveType(1)
  case U16 extends PrimitiveType(2)
  case U32 extends PrimitiveType(4)
  case I8 extends PrimitiveType(1)
  case I16 extends PrimitiveType(2)
  case I32 extends PrimitiveType(4)

export PrimitiveType.*

// =============================================================================
// Type Aliases for Tuple Type Parameters
// =============================================================================

type F32 = PrimitiveType.F32.type
type F64 = PrimitiveType.F64.type
type U8 = PrimitiveType.U8.type
type U16 = PrimitiveType.U16.type
type U32 = PrimitiveType.U32.type
type I8 = PrimitiveType.I8.type
type I16 = PrimitiveType.I16.type
type I32 = PrimitiveType.I32.type

// =============================================================================
// Primitive Views (Opaque Types) - ZERO COST
// =============================================================================

opaque type F32View = (DataView, Int)
object F32View:
  inline def apply(view: DataView, offset: Int): F32View = (view, offset)
  extension (v: F32View)
    inline def get: Float = v._1.getFloat32(v._2, littleEndian = true)
    inline def set(value: Float): Unit =
      v._1.setFloat32(v._2, value, littleEndian = true)

opaque type F64View = (DataView, Int)
object F64View:
  inline def apply(view: DataView, offset: Int): F64View = (view, offset)
  extension (v: F64View)
    inline def get: Double = v._1.getFloat64(v._2, littleEndian = true)
    inline def set(value: Double): Unit =
      v._1.setFloat64(v._2, value, littleEndian = true)

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
    inline def set(value: Int): Unit =
      v._1.setUint16(v._2, value, littleEndian = true)

opaque type U32View = (DataView, Int)
object U32View:
  inline def apply(view: DataView, offset: Int): U32View = (view, offset)
  extension (v: U32View)
    inline def get: Double = v._1.getUint32(v._2, littleEndian = true)
    inline def set(value: Double): Unit =
      v._1.setUint32(v._2, value, littleEndian = true)

opaque type I8View = (DataView, Int)
object I8View:
  inline def apply(view: DataView, offset: Int): I8View = (view, offset)
  extension (v: I8View)
    inline def get: Byte = v._1.getInt8(v._2)
    inline def set(value: Byte): Unit =
      v._1.setInt8(v._2, value)

opaque type I16View = (DataView, Int)
object I16View:
  inline def apply(view: DataView, offset: Int): I16View = (view, offset)
  extension (v: I16View)
    inline def get: Short = v._1.getInt16(v._2, littleEndian = true)
    inline def set(value: Short): Unit =
      v._1.setInt16(v._2, value, littleEndian = true)

opaque type I32View = (DataView, Int)
object I32View:
  inline def apply(view: DataView, offset: Int): I32View = (view, offset)
  extension (v: I32View)
    inline def get: Int = v._1.getInt32(v._2, littleEndian = true)
    inline def set(value: Int): Unit =
      v._1.setInt32(v._2, value, littleEndian = true)

// =============================================================================
// Compile-Time Size and Offset Calculation (Match Types)
// =============================================================================

import scala.compiletime.{constValue, erasedValue, error}
import scala.compiletime.ops.int.+

/** Size of a primitive field type in bytes */
type PrimitiveSize[T] <: Int = T match
  case F32 => 4
  case F64 => 8
  case U8  => 1
  case U16 => 2
  case U32 => 4
  case I8  => 1
  case I16 => 2
  case I32 => 4

/** Total size of a tuple (struct) in bytes - handles both primitives and nested
  * tuples
  */
type TupleSize[Fields <: Tuple] <: Int = Fields match
  case EmptyTuple       => 0
  case (h *: t) *: tail => TupleSize[h *: t] + TupleSize[tail] // Nested tuple
  case head *: tail     => PrimitiveSize[head] + TupleSize[tail] // Primitive

/** Size of any field (primitive or nested tuple) */
type FieldSize[T] <: Int = T match
  case F32    => 4
  case F64    => 8
  case U8     => 1
  case U16    => 2
  case U32    => 4
  case I8     => 1
  case I16    => 2
  case I32    => 4
  case h *: t => TupleSize[h *: t]

/** Offset of field at index N within a tuple */
type FieldOffset[Fields <: Tuple, N <: Int] <: Int = N match
  case 0                               => 0
  case scala.compiletime.ops.int.S[n1] =>
    Fields match
      case (h *: t) *: tail =>
        TupleSize[h *: t] + FieldOffset[tail, n1] // Nested tuple head
      case head *: tail =>
        PrimitiveSize[head] + FieldOffset[tail, n1] // Primitive head

/** Value type mapping for get/set */
type ValueType[T] = T match
  case F32 => Float
  case F64 => Double
  case U8  => Short
  case U16 => Int
  case U32 => Double
  case I8  => Byte
  case I16 => Short
  case I32 => Int

/** Return type for field access - StructRef for tuples, FieldRef for primitives
  */
type FieldAccess[T] = T match
  case h *: t => StructRef[T & Tuple]
  case _      => PrimitiveRef[T]

// =============================================================================
// Typed StructArray - ZERO COST: just (DataView, count), layout is phantom type
// =============================================================================

opaque type StructArray[Fields <: Tuple] = (DataView, Int) // view, count

object StructArray:
  /** Allocate a new struct array with compile-time known stride */
  inline def allocate[Fields <: Tuple](count: Int): StructArray[Fields] =
    val stride = constValue[TupleSize[Fields]]
    val buffer = new ArrayBuffer(stride * count)
    (new DataView(buffer), count)

  /** Wrap an existing ArrayBuffer */
  inline def wrap[Fields <: Tuple](buffer: ArrayBuffer): StructArray[Fields] =
    val stride = constValue[TupleSize[Fields]]
    val count = if stride == 0 then 0 else buffer.byteLength / stride
    (new DataView(buffer), count)

  extension [Fields <: Tuple](arr: StructArray[Fields])
    inline def length: Int = arr._2
    inline def stride: Int = constValue[TupleSize[Fields]]
    inline def dataView: DataView = arr._1
    inline def arrayBuffer: ArrayBuffer =
      arr._1.buffer.asInstanceOf[ArrayBuffer]

    /** Access element at index - no bounds check, relies on DataView for errors
      */
    inline def apply(index: Int): StructRef[Fields] =
      (arr._1, index * constValue[TupleSize[Fields]])

// =============================================================================
// struct[] factory - convenience wrapper
// =============================================================================

/** Phantom layout type for API convenience */
final class StructLayout[Fields <: Tuple]:
  inline def sizeInBytes: Int = constValue[TupleSize[Fields]]
  inline def allocate(count: Int): StructArray[Fields] =
    StructArray.allocate[Fields](count)
  inline def apply(): StructRef[Fields] = allocate(1)(0)
  inline def fromBuffer(
      buffer: ArrayBuffer,
      offset: Int = 0
  ): StructRef[Fields] =
    StructRef[Fields](new DataView(buffer), offset)

/** Create a phantom layout - zero runtime cost */
inline def struct[Fields <: Tuple]: StructLayout[Fields] =
  new StructLayout[Fields]

// =============================================================================
// Typed StructRef - ZERO COST: just (DataView, offset), layout is phantom type
// =============================================================================

opaque type StructRef[Fields <: Tuple] = (DataView, Int) // view, offset

object StructRef:
  inline def apply[Fields <: Tuple](
      view: DataView,
      offset: Int
  ): StructRef[Fields] =
    (view, offset)

  extension [Fields <: Tuple](s: StructRef[Fields])
    inline def dataView: DataView = s._1
    inline def offset: Int = s._2

    /** Field access by index - compile-time bounds check via Tuple.Elem.
      * Returns StructRef for nested tuples, PrimitiveRef for primitives. Index
      * must be a literal constant; out-of-bounds causes compile error.
      */
    transparent inline def apply(
        n: Int
    ): FieldAccess[Tuple.Elem[Fields, n.type]] =
      inline erasedValue[Tuple.Elem[Fields, n.type]] match
        case _: (h *: t) =>
          StructRef[Tuple.Elem[Fields, n.type] & Tuple](
            s._1,
            s._2 + constValue[FieldOffset[Fields, n.type]]
          )
        case _ =>
          PrimitiveRef[Tuple.Elem[Fields, n.type]](
            s._1,
            s._2 + constValue[FieldOffset[Fields, n.type]]
          )

    /** Copy data from another struct of the same layout */
    inline def copyFrom(other: StructRef[Fields]): Unit =
      val stride = constValue[TupleSize[Fields]]
      val src = new Uint8Array(other._1.buffer, other._2, stride)
      val dst = new Uint8Array(s._1.buffer, s._2, stride)
      dst.set(src)

    /** Extract a slice buffer containing just this struct's bytes */
    inline def sliceBuffer: ArrayBuffer =
      val stride = constValue[TupleSize[Fields]]
      s._1.buffer.slice(s._2, s._2 + stride)

// =============================================================================
// Typed PrimitiveRef - ZERO COST reference to a primitive leaf field
// =============================================================================

opaque type PrimitiveRef[T] = (DataView, Int) // view, absoluteOffset

object PrimitiveRef:
  inline def apply[T](view: DataView, offset: Int): PrimitiveRef[T] =
    (view, offset)

  extension [T](f: PrimitiveRef[T])
    inline def view: DataView = f._1
    inline def offset: Int = f._2

    /** Get the value - type is determined by T */
    inline def get: ValueType[T] =
      inline erasedValue[T] match
        case _: F32 => f._1.getFloat32(f._2, littleEndian = true)
        case _: F64 => f._1.getFloat64(f._2, littleEndian = true)
        case _: U8  => f._1.getUint8(f._2)
        case _: U16 => f._1.getUint16(f._2, littleEndian = true)
        case _: U32 => f._1.getUint32(f._2, littleEndian = true)
        case _: I8  => f._1.getInt8(f._2)
        case _: I16 => f._1.getInt16(f._2, littleEndian = true)
        case _: I32 => f._1.getInt32(f._2, littleEndian = true)

    /** Set the value - type is determined by T */
    inline def set(value: ValueType[T]): Unit =
      inline erasedValue[T] match
        case _: F32 =>
          f._1.setFloat32(f._2, value.asInstanceOf[Float], littleEndian = true)
        case _: F64 =>
          f._1.setFloat64(f._2, value.asInstanceOf[Double], littleEndian = true)
        case _: U8  => f._1.setUint8(f._2, value.asInstanceOf[Short])
        case _: U16 =>
          f._1.setUint16(f._2, value.asInstanceOf[Int], littleEndian = true)
        case _: U32 =>
          f._1.setUint32(f._2, value.asInstanceOf[Double], littleEndian = true)
        case _: I8  => f._1.setInt8(f._2, value.asInstanceOf[Byte])
        case _: I16 =>
          f._1.setInt16(f._2, value.asInstanceOf[Short], littleEndian = true)
        case _: I32 =>
          f._1.setInt32(f._2, value.asInstanceOf[Int], littleEndian = true)

    /** Assignment operator alias for set */
    inline def :=(value: ValueType[T]): Unit = set(value)

    /** Apply alias for get - allows p.pos.x() syntax */
    inline def apply(): ValueType[T] = get

    /** Apply with value alias for set - allows p.pos.x(100.0f) syntax */
    inline def apply(value: ValueType[T]): Unit = set(value)
