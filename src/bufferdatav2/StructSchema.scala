package bufferdatav2

final case class FieldDescriptor(kind: PrimitiveKind, offset: Int):
  def size: Int = kind.byteSize

final class StructSchema private (val fields: Vector[FieldDescriptor]):
  val stride: Int =
    fields.lastOption.map(f => f.offset + f.kind.byteSize).getOrElse(0)

  def fieldCount: Int = fields.size

  def fieldKind(index: Int): PrimitiveKind = fields(index).kind

  def fieldOffset(index: Int): Int = fields(index).offset

  override def toString: String =
    fields
      .map(fd => s"${fd.kind} @ ${fd.offset}")
      .mkString("StructSchema(", ", ", ")")

object StructSchema:
  def apply(kinds: PrimitiveKind*): StructSchema =
    require(kinds.nonEmpty, "Struct schema requires at least one field")

    val (fields, _) = kinds.foldLeft((Vector.empty[FieldDescriptor], 0)) {
      case ((acc, cursor), kind) =>
        val descriptor = FieldDescriptor(kind, cursor)
        (acc :+ descriptor, cursor + kind.byteSize)
    }

    new StructSchema(fields)
