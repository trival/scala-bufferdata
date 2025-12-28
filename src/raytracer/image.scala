package raytracer.image

import bufferdata.*
import raytracer.vector.*
import numHelpers.*

type ColorRGBASchema = (U8, U8, U8, U8)

val ColorRGBAStruct = struct[ColorRGBASchema]

type ColorRGBA = StructRef[ColorRGBASchema]

extension (c: ColorRGBA)
  inline def r = c(0)
  inline def g = c(1)
  inline def b = c(2)
  inline def a = c(3)

  inline def set(rv: Short, gv: Short, bv: Short, av: Short): Unit =
    r := rv
    g := gv
    b := bv
    a := av

  inline def setFromVec3d(vec: Vec3d, alpha: Short = 255): Unit =
    val rF = (vec.x().clamp(0.0, 0.999) * 256.0).toShort
    val gF = (vec.y().clamp(0.0, 0.999) * 256.0).toShort
    val bF = (vec.z().clamp(0.0, 0.999) * 256.0).toShort
    set(rF, gF, bF, alpha)
