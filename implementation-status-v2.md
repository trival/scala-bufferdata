% BufferData v2 - Implementation Status

## ✅ Current State

1. **API aligned with preparations sketch**
   - `BinaryPrimitiveType`, `StructLayout`, `StructArray`, `StructView`, and `FieldView` live in `src/bufferdatav2/api.scala`, giving us the same shapes described in `src/preparations/api-design.scala`.
   - `struct(...)` accepts primitives or nested layouts, computes offsets/stride at runtime, and supports chaining like `particle._0._1`.
   - `StructLayout.allocate`, `StructLayout()` (single struct), `StructView.copyFrom`, and `FieldView.get/set` mirror the proposed ergonomics.

2. **Particle proof of concept**
   - `BufferDataV2` wraps the `(F32, U8)` schema, plus helpers to allocate/populate buffers for demos/tests (`src/bufferdatav2/BufferDataV2.scala`).

2. **App wiring & JS export**
   - `BufferDataV2Demo` runs a console demo and exports `createBufferDataV2Particles` via `@JSExportGlobal` so we can validate Scala.js output (`src/Main.scala`).

3. **Tests**
   - `BufferDataV2Test` covers schema math, allocation sizing, and round-trip read/write for the 10-element buffer proof-of-concept (`test/src/BufferDataV2Test.scala`).
   - Full test suite (`scala-cli test .`) is green.

## ⏭️ Planned / TODO

1. **Inline/zero-cost views**
   - Replace the current runtime classes with opaque types + inline accessors so Scala.js erases the layers and emits direct DataView calls.

2. **Compile-time schema builder**
   - Re-implement `struct(...)` using inline tuple/match-type computation so offsets and nested layouts are resolved at compile time rather than at runtime.

3. **Primitive coverage & endianness**
   - Fill out the enum with any missing primitives (signed/unsigned ints, F64 extras) and expose per-field endianness where it matters.

4. **Named accessors**
   - Layer in Scala 3 named tuples or literal field labels so callers can write `particle.position.x` in addition to `_0._0`.

5. **Performance polish**
   - Add DataView reuse/buffering, field-level helpers (e.g., `float32(i)`), and micro-benchmarks or JS output inspection to validate the zero-cost goal.

6. **Error reporting and safety**
   - Provide clearer errors for out-of-bounds field indexes, schema mismatches in `copyFrom`, and optional debug-time bounds checks.
