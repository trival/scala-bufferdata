% BufferData v2 - Implementation Status

## ✅ Current State

1. **Minimal schema & buffer API (`bufferdatav2`)**
   - `PrimitiveKind` exposes `F32` and `U8` with byte sizes and DataView helpers (`src/bufferdatav2/PrimitiveKind.scala`).
   - `StructSchema` accumulates offsets/stride for arbitrary sequences of primitive fields (`src/bufferdatav2/StructSchema.scala`).
   - `StructArray` + `StructInstance` manage ArrayBuffer allocation, indexing, and typed get/set operations (`src/bufferdatav2/StructArray.scala`).
   - `BufferDataV2` provides a thin façade for the `(F32, U8)` particle example along with helper methods to allocate/populate buffers (`src/bufferdatav2/BufferDataV2.scala`).

2. **App wiring & JS export**
   - `BufferDataV2Demo` runs a console demo and exports `createBufferDataV2Particles` via `@JSExportGlobal` so we can validate Scala.js output (`src/Main.scala`).

3. **Tests**
   - `BufferDataV2Test` covers schema math, allocation sizing, and round-trip read/write for the 10-element buffer proof-of-concept (`test/src/BufferDataV2Test.scala`).
   - Full test suite (`scala-cli test .`) is green.

## ⏭️ Planned / TODO

1. **Extend primitive coverage**
   - Add the remaining integer/float kinds (I8/I16/I32/U16/U32/F64) plus endianness flags.

2. **Inline/zero-cost views**
   - Replace the current runtime checks in `StructInstance` with inline-generated accessors (opaque types + extension methods) so the JS output collapses to direct DataView calls.

3. **Tuple-based schema builders**
   - Provide inline `struct(F32, U8, ...)` helpers that compute offsets/stride at compile time rather than using runtime `StructSchema` construction.

4. **Nested structs**
   - Allow schemas to contain other schemas, enabling layouts such as `(Vec2F32, Vec2F32, U8)` while reusing offsets/stride computation.

5. **Named accessors**
   - Layer on Scala 3 named tuples or literal field labels to generate ergonomic `particle.position.x` style accessors without runtime overhead.

6. **Performance polish**
   - Avoid repeated `new DataView(buffer)` by caching views or threading them through the API.
   - Inspect emitted JavaScript to ensure the abstraction remains zero-cost once inline types are introduced.
