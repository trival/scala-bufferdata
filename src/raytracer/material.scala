package raytracer.material

import bufferdata.*
import raytracer.vector.*

// Material schema: type field is inside the material data
type MaterialSchema = (U8, Vec3dSchema, F64)

val MaterialStruct = struct[MaterialSchema]

type Material = StructRef[MaterialSchema]

enum MaterialType(val code: Short):
  case Lambertian extends MaterialType(0)
  case Metal extends MaterialType(1)

object MaterialType:
  inline def fromShort(code: Short): MaterialType =
    code match
      case 0     => MaterialType.Lambertian
      case 1     => MaterialType.Metal
      case other =>
        throw new IllegalArgumentException(s"Unknown MaterialType code: $other")

extension (mt: MaterialType) inline def toShort: Short = mt.code

object Material:
  inline def apply(): Material = MaterialStruct()

  inline def apply(
      materialType: MaterialType,
      color: Vec3d,
      fuzz: Double
  ): Material =
    val m = Material()
    m.materialType := materialType.toShort
    m.color := color
    m.fuzz := fuzz
    m

extension (m: Material)
  inline def materialType = m(0)
  inline def color = m(1)
  inline def fuzz = m(2)

  inline def materialTypeEnum: MaterialType =
    MaterialType.fromShort(m.materialType())

  inline def setMaterialType(mt: MaterialType): Unit =
    m.materialType := mt.toShort

  inline def copyTo(target: Material): Unit =
    target.materialType := m.materialType()
    target.color := m.color
    target.fuzz := m.fuzz()
