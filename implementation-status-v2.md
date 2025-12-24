% BufferData v2 - Implementation Status

## ✅ Current State

1. **Tuple-based schema API**
   - Primitive kinds (`F32`, `U8`, etc.) live in `bufferdatav2.BufferPrimitive`; callers describe layouts with bare tuples (`val Particle = schema[(F32, U8)]`).
   - `Schema[Fields]` (from `schema[...]`) exposes `sizeInBytes`, `allocate`, and `apply()` helpers while deriving offsets/stride at compile time (`src/bufferdatav2/api.scala`).
   - `StructArray`, `StructRef` (opaque buffer offsets), and `FieldRef` now sit on opaque types + inline extensions, so `array(i)._0.set(...)` inlines to direct `DataView` calls even for nested schemas like `schema[((F32, F32), U8)]`.

2. **Particle proof of concept**
   - `BufferDataV2` wraps the `(F32, U8)` schema, plus helpers to allocate/populate buffers for demos/tests (`src/example/bufferdatav2/BufferDataV2.scala`).

3. **App wiring & JS export**
   - `BufferDataV2Demo` runs a console demo and exports `createBufferDataV2Particles` via `@JSExportGlobal` so we can validate Scala.js output (`src/Main.scala`).

4. **Tests**
   - `BufferDataV2Test` (now under `test/src/BufferDataV2Test.scala`, package `bufferdatav2tests`) exercises layout math, primitive access, nested schemas, and `copyFrom`.
   - Full test suite (`scala-cli test .`) is green.

## ⏭️ Planned / TODO

1. **Finalize zero-cost surface**
   - Keep pushing opaque types further (e.g., remove remaining runtime pattern matches, inline primitive get/set helpers) and inspect emitted JS to confirm there are no intermediate allocations.

2. **Named accessors**
   - Scala 3 “named tuples” desugar via `scala.NamedTuple.build`, and the resulting types do **not** conform to `Tuple`. Supporting `schema[(position: (F32, F32), life: U8)]` therefore requires decoding those `NamedTuple` encodings rather than relying on plain tuple recursion.
   - Plan: add a compile-time extractor that maps a named tuple to `(label, value)` pairs first, then reuse the existing tuple machinery to compute offsets. Until that exists, callers should stick with anonymous tuples.

3. **Primitive coverage & endianness**
   - Broaden `BufferPrimitive` to cover remaining signed/unsigned widths, control endianness per field, and add validation helpers.

4. **Performance polish**
   - Add DataView reuse/buffering, field-level helpers (e.g., `float32(i)`), and micro-benchmarks or JS output inspection to validate the zero-cost goal.

5. **Error reporting and safety**
   - Provide clearer errors for out-of-bounds field indexes, schema mismatches in `copyFrom`, and optional debug-time bounds checks.
