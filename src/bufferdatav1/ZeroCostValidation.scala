package bufferdatav1

import scala.scalajs.js
import scala.scalajs.js.annotation.JSExportTopLevel
import scala.scalajs.js.typedarray.{ArrayBuffer, DataView}

/** Zero-cost validation examples.
  *
  * This object demonstrates both:
  * 1. Direct DataView usage (baseline - what we want to achieve)
  * 2. Usage through our abstractions (to compare generated JS)
  *
  * The goal is for the abstracted version to generate identical JS to the direct version.
  */
object ZeroCostValidation:

  /** Direct DataView usage - the baseline for comparison.
    * Generated JS should be: `dataView.setFloat32(offset, value, true)`
    */
  @JSExportTopLevel("zeroCostDirect")
  def directDataViewUsage(): js.Object =
    val buffer = new ArrayBuffer(20) // 4 structs of (F32, U8) = 4 * 5 bytes
    val view = new DataView(buffer)
    val stride = 5

    // Write 4 particles directly
    var i = 0
    while i < 4 do
      val baseOffset = i * stride
      view.setFloat32(baseOffset + 0, i.toFloat * 2.0f, true)  // F32 at offset 0
      view.setUint8(baseOffset + 4, (i * 10).toShort)          // U8 at offset 4
      i += 1

    // Read back first and last
    val first = js.Dynamic.literal(
      f32 = view.getFloat32(0, true),
      u8 = view.getUint8(4)
    )
    val last = js.Dynamic.literal(
      f32 = view.getFloat32(3 * stride, true),
      u8 = view.getUint8(3 * stride + 4)
    )

    js.Dynamic.literal(first = first, last = last)

  /** Using F32View/U8View opaque types directly.
    * This should generate direct DataView calls.
    */
  @JSExportTopLevel("zeroCostPrimitiveViews")
  def primitiveViewsUsage(): js.Object =
    val buffer = new ArrayBuffer(20)
    val view = new DataView(buffer)
    val stride = 5

    var i = 0
    while i < 4 do
      val baseOffset = i * stride
      // Use opaque type views
      val f32View = F32View(view, baseOffset + 0)
      val u8View = U8View(view, baseOffset + 4)
      f32View.set(i.toFloat * 2.0f)
      u8View.set((i * 10).toShort)
      i += 1

    val firstF32 = F32View(view, 0)
    val firstU8 = U8View(view, 4)
    val lastF32 = F32View(view, 3 * stride)
    val lastU8 = U8View(view, 3 * stride + 4)

    js.Dynamic.literal(
      first = js.Dynamic.literal(f32 = firstF32.get, u8 = firstU8.get),
      last = js.Dynamic.literal(f32 = lastF32.get, u8 = lastU8.get)
    )

  /** Using full typed struct abstraction with ERASED LAYOUT.
    * Compare generated JS with the direct version above.
    * Should now be nearly identical due to compile-time offset calculation.
    */
  @JSExportTopLevel("zeroCostStructViews")
  def structViewsUsage(): js.Object =
    val particles = StructArray.allocate[(F32, U8)](4)

    var i = 0
    while i < 4 do
      particles(i)._0.set(i.toFloat * 2.0f)
      particles(i)._1.set((i * 10).toShort)
      i += 1

    js.Dynamic.literal(
      first = js.Dynamic.literal(
        f32 = particles(0)._0.get,
        u8 = particles(0)._1.get
      ),
      last = js.Dynamic.literal(
        f32 = particles(3)._0.get,
        u8 = particles(3)._1.get
      )
    )

  /** Validation test - runs all three and compares results */
  @JSExportTopLevel("validateZeroCost")
  def validate(): js.Object =
    val direct = directDataViewUsage().asInstanceOf[js.Dynamic]
    val primitive = primitiveViewsUsage().asInstanceOf[js.Dynamic]
    val struct = structViewsUsage().asInstanceOf[js.Dynamic]

    js.Dynamic.literal(
      direct = direct,
      primitive = primitive,
      struct = struct,
      allEqual = (
        direct.first.f32 == primitive.first.f32 &&
        direct.first.u8 == primitive.first.u8 &&
        direct.last.f32 == primitive.last.f32 &&
        direct.last.u8 == primitive.last.u8 &&
        primitive.first.f32 == struct.first.f32 &&
        primitive.first.u8 == struct.first.u8 &&
        primitive.last.f32 == struct.last.f32 &&
        primitive.last.u8 == struct.last.u8
      )
    )
