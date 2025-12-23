package bufferdata.preparations.api.design
import scala.scalajs.js.typedarray.DataView
import scala.scalajs.js.typedarray.ArrayBuffer

opaque type StructLayout = Any

extension (layout: StructLayout)
  def sizeInBytes: Int = ???
  def allocate(count: Int): StructArray = ???
  def apply(): StructView = layout.allocate(1)(0)

class FieldView(val dataView: DataView, val offset: Int, val fieldType: Any):

  def get: Any = ???
  def set(value: Any): Unit = ???

  // these are just for demo purposes, in real code these are nested structViews or something similar
  def _0: FieldView = ???
  def _1: FieldView = ???
  def _2: FieldView = ???
  def _3: FieldView = ???

class StructView(val layout: StructLayout):
  def apply(fieldIndex: Int): FieldView = ???
  def copyFrom(other: StructView): Unit = ???

  def _0: FieldView = ???
  def _1: FieldView = ???
  def _2: FieldView = ???
  def _3: FieldView = ???

class StructArray:
  def length: Int = ???
  def apply(index: Int): StructView = ???
  def arrayBuffer: ArrayBuffer = ???

enum BinaryPrimitive:
  case U8
  case U16
  case I32
  case U32
  case F32
  case F64

def struct(fields: (BinaryPrimitive | StructLayout)*): StructLayout = ???

def main() =
  import BinaryPrimitive.*
  val Vec2Layout = struct(F32, F32)
  val UVec3Layout = struct(U32, U32, U32)
  val ParticleLayout = struct(Vec2Layout, U8, F32, UVec3Layout)

  val buffer = ParticleLayout.allocate(1000) // Allocate array of 1000 particles

  val particle =
    ParticleLayout() // alias to allocate(1)(0) - single struct view

  // Example usage (pseudocode for design illustration)
  // particle._0._0 = 1.0f // Set x of Vec2
  // particle._0._1 = 2.0f // Set y of Vec2
  // particle._1 = 255 // Set U8 field
  // particle._2 = 3.14f // Set F32 field
  // particle._3._0 = 100 // Set x of UVec3
  // particle._3._1 = 200 // Set y of UVec3
  // particle._3._2 = 300 // Set z of UVec3

  // // alternatively use dedicated set and get methods
  // particle._0._0.set(1.0f)

  val particle0 = buffer(0)

  particle0.copyFrom(particle) // Copy data from one struct to another

  // val vec2X = particle0._0._0 // Get x of Vec2
  // assert(vec2X == 1.0f)
  // // or with get method
  // val vec2XAlt = particle0._0._0.get
  // assert(vec2XAlt == 1.0f)

  val rawBuffer = buffer.arrayBuffer // Get underlying ArrayBuffer
