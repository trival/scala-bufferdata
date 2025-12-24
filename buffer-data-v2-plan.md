# Buffer Data Structures Plan

## Goals & Constraints

- Keep the entire codebase (doc + implementation) in Scala 3 braceless syntax so that generated Scala.js is idiomatic for the project.
- Represent binary data in Scala.js with minimal runtime overhead by leaning on `scalajs.js.typedarray.ArrayBuffer` + `DataView`.
- Abstract over _what_ lives in the buffer (structs, nested structs, repeated elements) while emitting code that is just DataView reads/writes after Scala 3 inline expansion.
- Provide: (1) an enum of primitive field kinds (e.g., `F32`, `U8`, `I16`, `F64`, `U32LE`), (2) composite schemas composed from those kinds, (3) views that reference `ArrayBuffer`, length (bytes) and base offset, and (4) indexed access into arrays of structs.
- Scenario to validate design: a struct made of `(F32, F32, U8)` that we can instantiate, index, and nest inside a higher-level schema.
- Future-proof for reuse in WebGL/WebGPU pipelines where predictable layout and large sequential access patterns matter.

## Background Research

- Scala.js exposes `scalajs.js.typedarray.ArrayBuffer`, `DataView`, and typed arrays in `scalajs.js.typedarray.` namespace. `DataView` offers `getFloat32`, `setFloat32`, `getUint8`, `setUint8`, etc., each with a `littleEndian: Boolean = false` parameter; default is big-endian per ECMAScript.
- ArrayBuffer slices are cheap: `buffer.slice(begin, end)` shares memory; we can also keep a single `ArrayBuffer` reference with offset bookkeeping to avoid allocations.
- Inline macros in Scala 3: we can use inline methods plus `erasedValue`, `constValue`, `Mirror`, and inline matches to turn type-level tuples (or type constructors) into compile-time descriptors. That lets us build schema metadata (`size`, `field offsets`, `DataView` op names) once at compile time.
- Literal tuple arguments (`struct(F32, F32, U8)`) desugar to `Tuple3` at compile-time; inline pattern matching on `Tuple` plus recursion is idiomatic for shapeless-free metaprogramming.
- Recursive inline derivation works for nested schemas by defining `Schema[Field]` given `Schema[Inner]`: the macro can accumulate offsets and flatten nested byte sizes.

## Core Data Model Options

1. **Runtime Descriptors**
   - ```
     sealed trait FieldKind:
       def size: Int
       def read(view: DataView, byteOffset: Int): Any
     ```
     Build descriptors at runtime.
   - Pros: simple to reason about, easier debugging.
   - Cons: we pay allocations per schema use; DataView calls may go through virtual dispatch.
2. **Inline/Macro Descriptors (preferred)**
   - `inline def schema[T <: Tuple]: Schema[T]` computes total size + generated accessors; code for `FieldKind` becomes erased after inline, so JS output directly calls `dataView.getFloat32` etc.
   - Pros: zero abstraction cost, tree-shake friendly, ensures compile-time size calculation / bounds.
   - Cons: more complex compile-time code; errors harder to read; must ensure recursion terminates for nested schemas.

We can combine both: runtime case classes for debugging, with inline constructors that reduce constant expressions and embed `SchemaMetadata` objects directly into generated JS.

## API Sketch

```scala
val Particle = struct(F32, F32, U8)
val buffer = Buffer(Particle, count = 128)
val p0 = buffer(0)
p0.set(0, 1.0f)
p0.set(1, 2.0f)
p0.set(2, 255)
```

- `struct` accepts either inline varargs (`struct(F32, F32, U8)`) or a tuple (`struct((F32, F32, U8))`). Provide overloaded inline methods to avoid nested tuples if unwanted.
- Access by index: `particles(idx)` returns a lightweight `StructAccessor` that still shares the original buffer reference + base offset + computed stride.
- Nesting: allow fields to be other schemas: `val Transform = struct(Vec2F, U8)` where `Vec2F` is itself `struct(F32, F32)`; inline derivation must detect `SchemaField` vs `PrimitiveField`.
- Provide compile-time computed metadata: byte size, stride, alignment (optional), DataView op info.

## Primitive Enum Design

```scala
enum PrimitiveKind(val byteSize: Int, val readerName: String, val writerName: String):
  case F32 extends PrimitiveKind(4, "getFloat32", "setFloat32")
  case U8  extends PrimitiveKind(1, "getUint8", "setUint8")
  // ... add I8, I16, U16, I32, U32, F64, etc.
```

- Scala 3 enums offer exhaustive handling at compile time; inline matches can further reduce them to direct DataView calls.
- Provide endianness metadata per primitive; default to little-endian flag parameter in schema constructors to avoid repeating boolean arguments.

## Struct Composition & Usage

- Compositional API in camelCase:

```scala
val vec3Type = struct(F32, F32, F32)
val uvec2Type = struct(U32, U32)
val vertexType = struct(vec3Type, uvec2Type, U8)
val buffer = Buffer(vertexType, length = 100)
val vertexRef = buffer(24)
val position = vertexRef(0)
position.set(12.0f, 23.0f, 34.0f)
```

- Nested access returns new struct references that all share the parent `ArrayBuffer` and `DataView`; updates cascade immediately to the underlying bytes.
- Support constructing standalone struct refs backed by their own `ArrayBuffer` (useful for staging) and copying slices between buffers: `vertexRef.copyFrom(otherVertexRef)` copies `stride` bytes using `DataView.setUint8` loops or typed array views.
- Provide helpers to build parallel sequences of structs that share one backing buffer, plus APIs to extract or insert struct slices into foreign buffers for interop with WebGPU/WebGL upload pipelines.

### Named Tuples Caveat
- Scala 3 named tuples (e.g. `(position: (F32, F32), life: U8)`) are *not* regular `Tuple`s. The compiler lowers them through `scala.NamedTuple.build` and the resulting type no longer conforms to `Tuple`.
- Implication: our compile-time tuple recursion cannot “just work” with labelled tuples. We need extra machinery to decompose a named tuple (label/value pairs) into ordinary tuples before feeding them into the layout computation.
- For the initial zero-cost proof we therefore stick to anonymous tuples. Named access remains on the roadmap, but it requires a dedicated extractor for the `NamedTuple` encoding.

## Schema Composition Strategy

- `Schema` captures: total byte size, field descriptors (kind, offset, optional nested schema), stride (for arrays), and API for `StructAccessor`.
- Inline builder signature ideas:
  - `inline def struct[T <: Tuple](inline fields: T)(using ev: AllFields[T]): Schema[T]`
  - `type Field = PrimitiveKind | Schema[?]`
- Use type-level recursion for compile-time offset accumulation:

```scala
inline def computeOffsets[T <: Tuple, Acc <: Tuple, Offset <: Int]: SchemaMetadata =
  inline erasedValue[T] match
    case _: EmptyTuple => emptyMetadata
    case _: (head *: tail) =>
      val headMeta = fieldMeta[head](constValue[Offset])
      val tailMeta = computeOffsets[tail, Acc, Offset + headMeta.size]
      combine(headMeta, tailMeta)
```

- Provide typeclasses `FieldMeta[A]` with inline summon from either primitive enum or nested schema.

## Views & Accessors

- `final class BufferView[S <: Schema] private (buffer: ArrayBuffer, byteLength: Int, baseOffset: Int, dataView: DataView)`
  - `def apply(index: Int): StructAccessor[S]` -> calculates `offset = baseOffset + index * schema.stride` and returns accessor.
  - Accessor operations inline dispatch to DataView methods stored in metadata.
- Provide `def length: Int = byteLength / schema.stride` for arrays.
- Provide mutation operations, e.g., `particles.update(idx)(_.set(0, value))` or `particles.write(idx, particleValue)`. Keep ergonomic wrappers but core should stay simple.

## Inline Macro Plan

1. **Primitive Evidence**: define
   ```
   trait PrimitiveEvidence[K <: PrimitiveKind]:
     type Scala
     inline def read(view: DataView, offset: Int): Scala
     inline def write(view: DataView, offset: Int, value: Scala): Unit
   ```
   Provide inline given instances per enum case.
2. **Schema Evidence**: recursively summon `FieldEvidence` for tuple fields. Use inline recursion to accumulate offsets and produce a `SchemaMetadata` literal object.
3. **Generated Accessors**: inline `def field[N <: Int](idx: Int)` uses compile-time known offsets to emit direct `view.getFloat32(offset)` calls. Alternatively, generate `FieldAccessor` functions stored in metadata arrays.
4. **Example expansion**: `struct(F32, F32, U8)` reduces to metadata with `stride = 9` (assuming no padding). Access `particles(3).get[F32](0)` compiles to `view.getFloat32(base + 3 * 9 + 0, littleEndian)` due to inline constant folding.
5. **Nested Schemas**: metadata for nested struct uses `SchemaMetadata(childSize, ...)` and `StructAccessor` composes by new `BufferView` with adjusted offset.

## Implementation Phases

1. **Scaffolding**
   - Add primitive enum + evidence objects.
   - Define `SchemaMetadata` data classes (byteSize, fields list, optional nested info, littleEndian flags).
2. **Inline Builders**
   - Implement inline tuple-to-schema functions (varargs + tuple overloads) that output metadata constants.
   - Provide compile-time size calculation and static assertions (e.g., require positive sizes, ensure byteLength multiple of stride when building views).
3. **Access Layer**
   - Implement `BufferView` + `StructAccessor` referencing `ArrayBuffer`, `DataView`, offset, stride.
   - Add example `Particles` schema to validate API.
4. **Nesting & Composition**
   - Allow schemas as fields, ensuring offsets accumulate correctly. Provide helper like `inline def field[S <: Schema]` to embed nested schema metadata.
5. **Collections**
   - Add `BufferArena` or `StructArray[S]` that manages `ArrayBuffer` allocation, resizing, slicing, and ensures `length * stride == buffer.byteLength`.
6. **Testing**
   - Scala.js tests verifying read/write for primitives, nested structs, arrays, and bounds checking. Include golden tests for layout: e.g., ensure `(F32, F32, U8)` writes expected bytes.

## Open Questions / Risks

- Alignment & padding: default to packed structs; consider optional alignment policy later.
- Endianness: expose per-primitive override or schema-wide default? DataView requires boolean each call.
- Mutability vs immutability: Should accessor writes be immediate (imperative) or return new buffer slices? Likely imperative for performance.
- Error handling: what happens on out-of-bounds index? Throw JS `RangeError` vs Scala exception.
- Macro ergonomics: inline errors can be cryptic; document how to debug (use `compiletime.error`).
- Shared buffers (e.g., `SharedArrayBuffer` for workers) might need separate constructors.

## Next Steps

1. Prototype primitive enum + read/write evidence for `F32` and `U8` to validate API.
2. Implement inline `struct` builder handling `(F32, F32, U8)` and confirm generated JS is DataView-only.
3. Extend to nested schemas, add tests, then generalize to arbitrary-length arrays.
