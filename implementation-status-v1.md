# BufferData v1 - Implementation Status

## Current State (v3.0 - Zero-Cost Erased Layout)

### What's Implemented

Full **zero-cost** abstraction using compile-time match types for offset calculation. Layout information exists only at the type level - no runtime overhead.

### Key Design: Erased Layout

```scala
// Layout aliases - reusable handles
val Vec2 = struct[(F32, F32)]
val Vec3 = struct[(F32, F32, F32)]
val Mat4 = struct[(Vec4, Vec4, Vec4, Vec4)]  // Nested works too

// Allocate multiple buffers from same layout
val positions = Vec2.allocate(1000)
val velocities = Vec2.allocate(1000)
val single = Vec2()  // Shorthand for single struct

// Zero-cost field access - offsets computed at compile time
positions(i)(0).set(x)  // Compiles to: view.setFloat32(i*8+0, x, true)
positions(i)(1).set(y)  // Compiles to: view.setFloat32(i*8+4, y, true)
```

### Architecture

1. **Match Types for Compile-Time Calculation**
   - `TupleSize[Fields]` - computes struct size at compile time
   - `FieldOffset[Fields, N]` - computes field offset at compile time
   - `FieldSize[T]` - computes field size at compile time
   - `ValueType[T]` - maps type to Scala value type
   - `FieldAccess[T]` - returns `StructRef[T]` for tuples, `PrimitiveRef[T]` for primitives

2. **Minimal Runtime Types**
   - `StructArray[Fields] = (DataView, Int)` - just view + count
   - `StructRef[Fields] = (DataView, Int)` - just view + baseOffset
   - `PrimitiveRef[T] = (DataView, Int)` - just view + absoluteOffset
   - `StructLayout[Fields]` - phantom type carrier, no data

3. **All Offsets are Compile-Time Constants**
   ```scala
   transparent inline def apply(n: Int): FieldAccess[Tuple.Elem[Fields, n.type]] =
     // n.type is the singleton literal type (0, 1, 2...) - constValue resolves at compile time!
     (s._1, s._2 + constValue[FieldOffset[Fields, n.type]])
   ```

### Generated JavaScript Comparison

**Direct DataView (baseline):**
```javascript
var baseOffset = Math.imul(5, i);
view.setFloat32(baseOffset, value, true);
view.setUint8(4 + baseOffset, value2);
```

**Zero-cost struct abstraction:**
```javascript
var _2 = Math.imul(5, i);
_1.setFloat32(_2, value, true);
_1.setUint8(4 + _2, value2);
```

Virtually identical - stride (5) and offset (4) are compile-time constants!

### API Summary

```scala
import bufferdatav1.*

// Define layout aliases (reusable)
type Vec2 = (F32, F32)
type Particle = (Vec2, U8)
val particleLayout = struct[Particle]

// Allocate buffers
val array = particleLayout.allocate(100)
val single = particleLayout()

// Type-safe access (types inferred, offsets compile-time)
array(i)(0)(0).set(x)           // position.x
array(i)(0)(1).set(y)           // position.y
array(i)(1).set(life)           // life

val x: Float = array(i)(0)(0).get
val life: Short = array(i)(1).get

// Hot loop - no bounds check overhead
var i = 0
while i < array.length do
  array(i)(0).set(values(i))
  i += 1

// Utilities
array.arrayBuffer                // raw ArrayBuffer for WebGL/WebGPU
array.length                     // element count
array.stride                     // compile-time constant size
```

### Test Results

All 25 tests pass covering:
- Primitive views (F32, F64, U8, U16, U32, I8, I16, I32)
- Struct size calculation via match types
- Type-safe field access with inferred types
- Nested struct support (3+ levels deep)
- copyFrom, sliceBuffer utilities

### Files

- `src/bufferdatav1/package.scala` - Core implementation (~300 lines)
- `src/bufferdatav1/ZeroCostValidation.scala` - JS output comparison
- `test/src/BufferDataV1Test.scala` - Unit tests

### Running Commands

```bash
# Run tests
scala-cli test .

# Run demo
scala-cli run .

# Build JS bundle
scala-cli --power package . --js -o dist/bufferdata.js --force
```

## Design Decisions

1. **Erased Layout**: `StructLayout` is a phantom type - allocate/access use `constValue` for all calculations
2. **Match Types**: `TupleSize`, `FieldOffset` compute sizes/offsets at compile time
3. **Minimal Tuples**: All opaque types backed by `(DataView, Int)` - no layout reference
4. **No Bounds Checking**: `apply()` is zero-cost, relies on DataView for out-of-bounds errors
5. **Type Inference**: `Tuple.Elem[Fields, N]` extracts field types automatically

## Future Improvements

- **Nicer named syntax**: Currently `particles(0).apply["x"]` - could explore extension methods for `particles(0).x` via macros
- Alignment/padding options for GPU compatibility
- SIMD-friendly access patterns
- Linear algebra types (Vec2, Vec3, Mat4) as library layer
- **NamedTuple support**: When Scala 3 improves match type disjointness (potentially 3.10+)

## Named Field Access (December 2025)

### Recommended Approach: Simple Extensions on Unnamed Tuples

The most concise zero-cost approach for `.x` syntax is using simple extension methods on unnamed tuple structs:

```scala
import bufferdatav1.*

// Define layout with unnamed tuple
type Vec2 = (F32, F32)
type Particle = (Vec2, U8)

// Add named accessors via extension - only need StructRef!
// Nested tuple access automatically returns StructRef, not PrimitiveRef
extension (p: StructRef[Particle])
  inline def pos = p(0)   // Returns StructRef[Vec2]
  inline def life = p(1)  // Returns PrimitiveRef[U8]

extension (v: StructRef[Vec2])
  inline def x = v(0)     // Returns PrimitiveRef[F32]
  inline def y = v(1)     // Returns PrimitiveRef[F32]

// Usage - zero-cost .x syntax!
val particles = struct[Particle].allocate(100)
particles(0).pos.x.set(10.0f)
particles(0).pos.y.set(20.0f)
particles(0).life.set(100: Short)
```

This approach is:
- **Zero-cost**: `inline def` ensures complete inlining
- **Minimal boilerplate**: One line per field
- **Type-safe**: Compiler enforces correct types
- **No duplicate extensions**: Nested access returns `StructRef`, so one extension per type suffices
- **GLSL-style friendly**: Can define `.x`/`.y`/`.z` AND `.r`/`.g`/`.b` for same fields

### Key Design: StructRef for Nested Tuples

When accessing a field that is itself a tuple, you get `StructRef[T]` instead of `PrimitiveRef[T]`:

```scala
type Particle = (Vec2, U8)  // Vec2 is (F32, F32)

val p = struct[Particle]()
p(0)    // Returns StructRef[Vec2], NOT PrimitiveRef[Vec2]
p(1)    // Returns PrimitiveRef[U8] (primitive)
```

This means you only need one set of extensions per nested struct type - no need for duplicate extensions on both `StructRef` and `PrimitiveRef`.

### Design Principle

**Any generic named field access implementation must be more concise than:**
```scala
inline def x = p(0)
```

If a macro/annotation approach requires more code than the simple extension, it's not worth the complexity.

### Approaches Investigated (December 2025)

We explored several approaches to achieve `.x` syntax automatically. Here's what was tried:

#### 1. `selectDynamic` on Opaque Types - FAILED

**Attempt:** Add `extends Dynamic` to opaque `StructRef` type and use `selectDynamic`:
```scala
opaque type StructRef[Fields] <: Dynamic = (DataView, Int)
extension [Fields](s: StructRef[Fields])
  inline def selectDynamic(inline name: String): FieldRef[...] = ...
```

**Failure reasons:**
- Opaque types cannot extend `Dynamic`
- `inline name: String` cannot be used as a singleton type for match type lookup
- Scala 3 doesn't allow `name.type` on inline parameters

#### 2. Value Class with Dynamic - FAILED

**Attempt:** Wrap in value class extending `Dynamic`:
```scala
class StructRefDyn[Fields](val underlying: StructRef[Fields]) extends AnyVal with Dynamic:
  inline def selectDynamic(inline name: String): FieldRef[...] = ...
```

**Failure reasons:**
- `Implementation restriction: nested inline methods are not supported`
- Value classes with inline methods hit compiler limitations

#### 3. Wrapper Class with Dynamic - WORKED (but not zero-cost)

**Attempt:** Non-value class wrapper:
```scala
class NStructRefDyn[Fields](underlying: NStructRef[Fields]) extends Dynamic:
  def selectDynamic(name: String): FieldRef[...] = ...
```

**Result:** Works syntactically but allocates wrapper object - not zero-cost.

#### 4. Direct Macro Field Access - WORKED (zero-cost)

**Attempt:** Macro that takes struct ref and field name:
```scala
transparent inline def field[Fields <: Tuple](
    inline s: NStructRef[Fields],
    inline name: String
): Any = ${ fieldImpl[Fields]('s, 'name) }

// Usage:
field(particles(0), "x").set(10.0f)
```

**Result:** Zero-cost, but syntax is verbose (`field(p, "x")` vs `.x`).

#### 5. Code Generation Macro - WORKED (zero-cost, requires copy-paste)

**Attempt:** Macro that generates extension code as string:
```scala
inline def code[Fields <: Tuple](inline typeName: String): String =
  ${ codeImpl[Fields]('typeName) }

// Usage:
println(DeriveAccessors.code[Particle]("Particle"))
// Output: extension (p: NStructRef[Particle]) inline def x: FieldRef[F32] = ...
```

**Result:** Generates correct code but requires copy-pasting into source files.

#### 6. MacroAnnotation (@schema) - FAILED

**Attempt:** Use Scala 3 MacroAnnotation to transform schema definition:
```scala
@schema
type Particle = (("x", F32), ("y", F32), ("life", U8))
// Would auto-generate extension methods
```

**Failure reasons:**
- `MacroAnnotation.transform` can only return `Definition` nodes
- Extension methods are complex synthetic constructs (implicit classes or given instances)
- Cannot easily generate top-level extension blocks from annotation macros

### Why Not Scala 3 NamedTuple?

Scala 3 NamedTuple (`type Vec2 = (x: F32, y: F32)`) compiles to `NamedTuple[Names, Values]`. Match types cannot prove disjointness between `Tuple` and `NamedTuple[N, V]`:

```
failed since selector (F32, F32, U8) does not match case NamedTuple[n, v] => v
and cannot be shown to be disjoint from it either.
```

May be resolved in future Scala versions (potentially 3.10+).
