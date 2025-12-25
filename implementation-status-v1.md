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
positions(i)._0.set(x)  // Compiles to: view.setFloat32(i*8+0, x, true)
positions(i)._1.set(y)  // Compiles to: view.setFloat32(i*8+4, y, true)
```

### Architecture

1. **Match Types for Compile-Time Calculation**
   - `TupleSize[Fields]` - computes struct size at compile time
   - `FieldOffset[Fields, N]` - computes field offset at compile time
   - `FieldSize[T]` - computes field size at compile time
   - `ValueType[T]` - maps type to Scala value type

2. **Minimal Runtime Types**
   - `StructArray[Fields] = (DataView, Int)` - just view + count
   - `StructRef[Fields] = (DataView, Int)` - just view + baseOffset
   - `FieldRef[T] = (DataView, Int)` - just view + absoluteOffset
   - `StructLayout[Fields]` - phantom type carrier, no data

3. **All Offsets are Compile-Time Constants**
   ```scala
   inline def _0: FieldRef[Tuple.Elem[Fields, 0]] =
     (s._1, s._2 + constValue[FieldOffset[Fields, 0]])  // Constant!
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
array(i)._0._0.set(x)           // position.x
array(i)._0._1.set(y)           // position.y
array(i)._1.set(life)           // life

val x: Float = array(i)._0._0.get
val life: Short = array(i)._1.get

// Hot loop - use unsafeApply to skip bounds check
var i = 0
while i < array.length do
  array.unsafeApply(i)._0.set(values(i))
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
4. **Safe + Unsafe API**: `apply()` has bounds check, `unsafeApply()` for hot loops
5. **Type Inference**: `Tuple.Elem[Fields, N]` extracts field types automatically

## Future Improvements

- Named field access via NamedTuple (Scala 3.5+)
- Alignment/padding options for GPU compatibility
- SIMD-friendly access patterns
- Linear algebra types (Vec2, Vec3, Mat4) as library layer
