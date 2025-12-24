package bufferdatav2

import scala.collection.mutable.ArrayBuffer
import scala.compiletime.{erasedValue, error}
import scala.scalajs.js.typedarray.{ArrayBuffer as JsArrayBuffer, DataView}

sealed trait BufferPrimitive:
  def byteSize: Int
  def read(view: DataView, offset: Int): Any
  def write(view: DataView, offset: Int, value: Any): Unit

object BufferPrimitive:
  object U8 extends BufferPrimitive:
    val byteSize = 1
    inline def read(view: DataView, offset: Int): Any = view.getUint8(offset)
    inline def write(view: DataView, offset: Int, value: Any): Unit =
      val v = value match
        case i: Int   => i
        case s: Short => s.toInt
        case b: Byte  => b.toInt
        case _        => value.asInstanceOf[Int]
      view.setUint8(offset, v.toShort)

  object U16 extends BufferPrimitive:
    val byteSize = 2
    inline def read(view: DataView, offset: Int): Any = view.getUint16(offset, littleEndian = true)
    inline def write(view: DataView, offset: Int, value: Any): Unit =
      val v = value match
        case i: Int   => i
        case s: Short => s.toInt
        case _        => value.asInstanceOf[Int]
      view.setUint16(offset, v, littleEndian = true)

  object I32 extends BufferPrimitive:
    val byteSize = 4
    inline def read(view: DataView, offset: Int): Any = view.getInt32(offset, littleEndian = true)
    inline def write(view: DataView, offset: Int, value: Any): Unit =
      val v = value match
        case i: Int  => i
        case l: Long => l.toInt
        case _       => value.asInstanceOf[Int]
      view.setInt32(offset, v, littleEndian = true)

  object U32 extends BufferPrimitive:
    val byteSize = 4
    inline def read(view: DataView, offset: Int): Any = view.getUint32(offset, littleEndian = true)
    inline def write(view: DataView, offset: Int, value: Any): Unit =
      val v = value match
        case i: Int    => i.toDouble
        case l: Long   => l.toDouble
        case d: Double => d
        case f: Float  => f.toDouble
        case _         => value.asInstanceOf[Double]
      view.setUint32(offset, v, littleEndian = true)

  object F32 extends BufferPrimitive:
    val byteSize = 4
    inline def read(view: DataView, offset: Int): Any = view.getFloat32(offset, littleEndian = true)
    inline def write(view: DataView, offset: Int, value: Any): Unit =
      val v = value match
        case f: Float  => f
        case d: Double => d.toFloat
        case i: Int    => i.toFloat
        case _         => value.asInstanceOf[Float]
      view.setFloat32(offset, v, littleEndian = true)

  object F64 extends BufferPrimitive:
    val byteSize = 8
    inline def read(view: DataView, offset: Int): Any = view.getFloat64(offset, littleEndian = true)
    inline def write(view: DataView, offset: Int, value: Any): Unit =
      val v = value match
        case d: Double => d
        case f: Float  => f.toDouble
        case i: Int    => i.toDouble
        case _         => value.asInstanceOf[Double]
      view.setFloat64(offset, v, littleEndian = true)

type U8 = BufferPrimitive.U8.type
type U16 = BufferPrimitive.U16.type
type I32 = BufferPrimitive.I32.type
type U32 = BufferPrimitive.U32.type
type F32 = BufferPrimitive.F32.type
type F64 = BufferPrimitive.F64.type

private sealed trait FieldDescriptor:
  def offset: Int
  def sizeInBytes: Int

private final case class PrimitiveField(kind: BufferPrimitive, offset: Int) extends FieldDescriptor:
  val sizeInBytes: Int = kind.byteSize

private final case class NestedField(layout: LayoutMetadata, offset: Int) extends FieldDescriptor:
  val sizeInBytes: Int = layout.stride

final class LayoutMetadata(val stride: Int, val fields: Array[FieldDescriptor]):
  inline def fieldAt(index: Int): FieldDescriptor = fields(index)

object LayoutMetadata:
  inline def derive[Fields <: Tuple]: LayoutMetadata =
    val acc = ArrayBuffer.empty[FieldDescriptor]
    val finalOffset = accumulate[Fields](0, acc)
    new LayoutMetadata(finalOffset, acc.toArray)

  inline private def accumulate[Fields <: Tuple](offset: Int, acc: ArrayBuffer[FieldDescriptor]): Int =
    inline erasedValue[Fields] match
      case _: EmptyTuple => offset
      case _: (head *: tail) =>
        val next = appendField[head](offset, acc)
        accumulate[tail](next, acc)

  inline private def appendField[Field](offset: Int, acc: ArrayBuffer[FieldDescriptor]): Int =
    inline erasedValue[Field] match
      case _: BufferPrimitive =>
        val prim = summonPrimitive[Field]
        acc += PrimitiveField(prim, offset)
        offset + prim.byteSize
      case _: Tuple =>
        val nested = LayoutMetadata.derive[Field & Tuple]
        acc += NestedField(nested, offset)
        offset + nested.stride
      case _ =>
        error("Unsupported field type in schema definition")

  inline private def summonPrimitive[P]: BufferPrimitive =
    inline erasedValue[P] match
      case _: U8 => BufferPrimitive.U8
      case _: U16 => BufferPrimitive.U16
      case _: I32 => BufferPrimitive.I32
      case _: U32 => BufferPrimitive.U32
      case _: F32 => BufferPrimitive.F32
      case _: F64 => BufferPrimitive.F64
      case _ => error("Unknown primitive kind in schema")

final class Schema[Fields <: Tuple] private[bufferdatav2] (val metadata: LayoutMetadata):
  def sizeInBytes: Int = metadata.stride

  def allocate(count: Int): StructArray[Fields] =
    StructArray(metadata, count)

  def apply(): StructRef =
    allocate(1)(0)

object Schema:
  def fromMetadata[Fields <: Tuple](metadata: LayoutMetadata): Schema[Fields] =
    new Schema(metadata)

inline def schema[Fields <: Tuple]: Schema[Fields] =
  Schema.fromMetadata(LayoutMetadata.derive[Fields])

final class StructArray[Fields <: Tuple] private (
    private val metadata: LayoutMetadata,
    private val buffer: JsArrayBuffer,
    private val view: DataView
):
  def length: Int =
    if metadata.stride == 0 then 0 else buffer.byteLength / metadata.stride

  def apply(index: Int): StructRef =
    if index < 0 || index >= length then
      throw IndexOutOfBoundsException(s"Struct index $index outside 0 until $length")
    StructRef(metadata, view, index * metadata.stride)

  def arrayBuffer: JsArrayBuffer = buffer

object StructArray:
  def apply[Fields <: Tuple](metadata: LayoutMetadata, count: Int): StructArray[Fields] =
    require(count >= 0, "count must be non-negative")
    val totalBytes = metadata.stride * count
    val buffer = new JsArrayBuffer(totalBytes)
    val view = new DataView(buffer)
    new StructArray(metadata, buffer, view)

object StructRef:
  opaque type Type = (LayoutMetadata, DataView, Int)

  inline def apply(metadata: LayoutMetadata, view: DataView, offset: Int): Type =
    (metadata, view, offset)

  inline def metadata(ref: Type): LayoutMetadata = ref._1
  inline def view(ref: Type): DataView = ref._2
  inline def baseOffset(ref: Type): Int = ref._3

  inline private[bufferdatav2] def select(ref: Type, fieldIndex: Int): FieldRef.Type =
    val meta = metadata(ref)
    FieldRef(meta.fieldAt(fieldIndex), view(ref), baseOffset(ref))

  inline def copyInto(target: Type, source: Type): Unit =
    require(metadata(target) eq metadata(source), "Schema mismatch in copyFrom")
    val targetView = view(target)
    val sourceView = view(source)
    val stride = metadata(target).stride
    var i = 0
    while i < stride do
      val byte = sourceView.getUint8(baseOffset(source) + i)
      targetView.setUint8(baseOffset(target) + i, byte)
      i += 1

  object syntax:
    extension (ref: Type)
      inline def apply(fieldIndex: Int): FieldRef = StructRef.select(ref, fieldIndex)

      inline def copyFrom(other: Type): Unit =
        StructRef.copyInto(ref, other)

      inline def _0: FieldRef = StructRef.select(ref, 0)
      inline def _1: FieldRef = StructRef.select(ref, 1)
      inline def _2: FieldRef = StructRef.select(ref, 2)
      inline def _3: FieldRef = StructRef.select(ref, 3)

  export syntax.*

type StructRef = StructRef.Type

object FieldRef:
  opaque type Type = (FieldDescriptor, DataView, Int)

  inline def apply(descriptor: FieldDescriptor, view: DataView, baseOffset: Int): Type =
    (descriptor, view, baseOffset)

  inline def descriptor(ref: Type): FieldDescriptor = ref._1
  inline def view(ref: Type): DataView = ref._2
  inline def baseOffset(ref: Type): Int = ref._3

  inline private[bufferdatav2] def select(ref: Type, fieldIndex: Int): Type =
    StructRef.select(asStruct(ref), fieldIndex)

  extension (ref: Type)
    inline def get: Any = descriptor(ref) match
      case PrimitiveField(kind, offset) => kind.read(view(ref), baseOffset(ref) + offset)
      case NestedField(layout, offset)  => StructRef(layout, view(ref), baseOffset(ref) + offset)

    inline def set(value: Any): Unit = descriptor(ref) match
      case PrimitiveField(kind, offset) => kind.write(view(ref), baseOffset(ref) + offset, value)
      case NestedField(_, _) =>
        val candidate: Any = value
        candidate match
          case structView: StructRef => asStruct.copyFrom(structView)
          case _ =>
            throw IllegalArgumentException("Expected StructRef for nested field assignment")

    inline def apply(fieldIndex: Int): FieldRef = select(ref, fieldIndex)

    inline def _0: FieldRef = select(ref, 0)
    inline def _1: FieldRef = select(ref, 1)
    inline def _2: FieldRef = select(ref, 2)
    inline def _3: FieldRef = select(ref, 3)

    inline def asStruct: StructRef = descriptor(ref) match
      case NestedField(layout, offset) => StructRef(layout, view(ref), baseOffset(ref) + offset)
      case PrimitiveField(_, _) =>
        throw IllegalStateException("Primitive fields do not expose nested struct access")

type FieldRef = FieldRef.Type
