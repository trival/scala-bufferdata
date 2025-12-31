package raytracer.hit

import bufferdata.*
import raytracer.vector.*
import raytracer.material.*

// Hit with nested MaterialSchema (not flattened in source)
type HitSchema = (F64, Vec3dSchema, Vec3dSchema, U8, MaterialSchema)

val HitStruct = struct[HitSchema]

type Hit = StructRef[HitSchema]

extension (h: Hit)
  inline def t = h(0)
  inline def pos = h(1)
  inline def normal = h(2)
  inline def frontFace = h(3)
  inline def material = h(4) // Returns Material (nested struct)

  def copyFrom(other: Hit): Unit =
    h.t := other.t()
    other.pos.copyTo(h.pos)
    other.normal.copyTo(h.normal)
    h.frontFace := other.frontFace()
    other.material.copyTo(h.material)
