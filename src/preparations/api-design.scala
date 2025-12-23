package bufferdata.preparations.api.design

import scala.scalajs.js.typedarray.DataView

opaque type StructLayout = Any

extension (layout: StructLayout)
  def sizeInBytes: Int = ???

  def allocate(count: Int): StructArray = ???

  def apply(): StructView = layout.allocate(1)(0)

enum FieldView:
  case U8Field(offset: Int)
  case U16Field(offset: Int)
  case I32Field(offset: Int)
  case U32Field(offset: Int)
  case F32Field(offset: Int)
  case F64Field(offset: Int)
  case StructField(offset: Int, layout: StructLayout)

  def get(view: DataView): Any = ???
  def set(view: DataView, value: Any): Unit = ???

class StructView(val layout: StructLayout):
  def apply(fieldIndex: Int): FieldView = ???

  def copyFrom(other: StructView): Unit = ???

class StructArray:
  def length: Int = ???
  def apply(index: Int): StructView = ???
  def arrayBuffer: js.typedarray.ArrayBuffer = ???

enum BinaryPrimitiveType:
  case U8
  case U16
  case I32
  case U32
  case F32
  case F64

def struct(fields: (BinaryPrimitiveType | StructLayout)*): StructLayout = ???

def main() =
  import BinaryPrimitiveType.*
  val Vec2Layout = struct(F32, F32)
  val UVec3Layout = struct(U32, U32, U32)
  val ParticleLayout = struct(Vec2Layout, U8, F32, UVec3Layout)

  val buffer = ParticleLayout.allocate(1000) // Allocate array of 1000 particles

  val particle =
    ParticleLayout() // alias to allocate(1)(0) - single struct view

  particle._0._0 = 1.0f // Set x of Vec2
  particle._0._1 = 2.0f // Set y of Vec2
  particle._1 = 255 // Set U8 field
  particle._2 = 3.14f // Set F32 field
  particle._3._0 = 100 // Set x of UVec3
  particle._3._1 = 200 // Set y of UVec3
  particle._3._2 = 300 // Set z of UVec3

  val particle0 = buffer(0)

  particle0.copyFrom(particle) // Copy data from one struct to another

  val vec2X = particle0._0._0 // Get x of Vec2
  assert(vec2X == 1.0f)

  val rawBuffer = buffer.arrayBuffer // Get underlying ArrayBuffer
