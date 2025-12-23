# BufferData: Zero-Cost ArrayBuffer/DataView Wrapper for Scala.js

## Overview

This document outlines the **implementation-ready plan** for a true zero-cost abstraction library that provides type-safe, composable access to JavaScript ArrayBuffer and DataView APIs in Scala.js.

**Implementation Strategy**: Start with indexed access using opaque types, then add named fields on top of proven foundation.

### Core Principles

1. **True zero-cost**: Opaque types + inline methods = zero runtime overhead
2. **Iterative approach**: Indexed access first, named access later
3. **Verifiable performance**: Generated JavaScript must be inspectable and optimal

### Goals

1. **Simple varargs API**: Clean constructor syntax `struct(F32, F32, U8)`
2. **Indexed access foundation**: Implement `particles(0)._0.set(x)` first
3. **Named access extension**: Add `@struct case class` macro later for ergonomic field names
4. **Type-safe primitives**: Wrap DataView methods in type-safe opaque types
5. **Composable structures**: Build complex data structures from primitive types
6. **Nested structures**: Support arbitrarily nested definitions with zero allocation
7. **Compile-time offsets**: All layout computation resolved at compile time
8. **Zero allocations**: No object allocations in hot paths

## Background Research

### JavaScript ArrayBuffer & DataView APIs

#### ArrayBuffer

- Represents a fixed-length raw binary data buffer
- Cannot be directly manipulated; requires a "view" (like DataView or TypedArray)
- Created with: `new ArrayBuffer(byteLength)`

#### DataView

- Provides a low-level interface for reading/writing multiple number types in an ArrayBuffer
- Supports explicit endianness control
- Methods follow pattern: `get<Type>(byteOffset, littleEndian?)` and `set<Type>(byteOffset, value, littleEndian?)`
- Key methods:
  - `getFloat32(offset, littleEndian)` / `setFloat32(offset, value, littleEndian)`
  - `getFloat64(offset, littleEndian)` / `setFloat64(offset, value, littleEndian)`
  - `getInt8(offset)` / `setInt8(offset, value)`
  - `getInt16(offset, littleEndian)` / `setInt16(offset, value, littleEndian)`
  - `getInt32(offset, littleEndian)` / `setInt32(offset, value, littleEndian)`
  - `getUint8(offset)` / `setUint8(offset, value)`
  - `getUint16(offset, littleEndian)` / `setUint16(offset, value, littleEndian)`
  - `getUint32(offset, littleEndian)` / `setUint32(offset, value, littleEndian)`

#### Scala.js Bindings

Scala.js provides bindings in `scala.scalajs.js.typedarray`:

```scala
import scala.scalajs.js.typedarray.{ArrayBuffer, DataView}

val buffer = new ArrayBuffer(16)
val view = new DataView(buffer)
view.setFloat32(0, 3.14f, littleEndian = true)
val value = view.getFloat32(0, littleEndian = true)
```

### Scala 3 Inline & Metaprogramming Features

#### Inline Methods

- `inline def`: Method body is inlined at call site
- Enables compile-time computation and optimization
- Can be used with `inline if` for compile-time branching

#### Transparent Inline

- `transparent inline def`: Return type computed at call site based on actual arguments
- Useful for type-level programming

#### Inline Matches

- `inline x match { ... }`: Pattern matching resolved at compile time
- Enables type-based dispatch without runtime overhead

#### Macros (scala.quoted API)

- `inline def foo(inline x: T): R = ${ fooImpl('x) }`
- `fooImpl` receives `Expr[T]` and returns `Expr[R]`
- Full access to AST manipulation via `quotes.reflect`
- Can generate arbitrary code at compile time

#### Tuples & Tuple Ops (scala.Tuple)

- `*:` type for tuple cons: `Int *: String *: EmptyTuple`
- Compile-time tuple operations: `Head`, `Tail`, `Concat`, `Map`, etc.
- `Tuple.fromArray`, `Tuple.toArray` for runtime conversion

#### Match Types

- Type-level pattern matching: `type Elem[X] = X match { case List[t] => t }`
- Can be recursive
- Combined with inline methods for powerful metaprogramming

## Architecture Design

### Core Abstractions

#### 1. Primitive Type Enum

```scala
enum PrimitiveType:
  case F32  // Float32 - 4 bytes
  case F64  // Float64 - 8 bytes
  case I8   // Int8 - 1 byte
  case I16  // Int16 - 2 bytes
  case I32  // Int32 - 4 bytes
  case U8   // Uint8 - 1 byte
  case U16  // Uint16 - 2 bytes
  case U32  // Uint32 - 4 bytes
```

#### 2. Type Descriptors (Compile-Time)

These are used at compile time to describe structure layouts:

```scala
sealed trait TypeDesc:
  def sizeInBytes: Int
  def alignmentBytes: Int

case class PrimitiveDesc(primType: PrimitiveType) extends TypeDesc
case class StructDesc(fields: List[TypeDesc]) extends TypeDesc
```

#### 3. BufferRef - Zero-Cost Reference Encoding

Instead of runtime classes, we use an opaque type to encode buffer + offset:

```scala
// No runtime representation - erased after compilation
opaque type BufferRef = Long  // Encodes: buffer reference (32-bit) + offset (32-bit)

object BufferRef:
  inline def encode(buffer: ArrayBuffer, offset: Int): BufferRef =
    // Store buffer in a global registry, use handle + offset
    ???

  inline def extractBuffer(ref: BufferRef): ArrayBuffer = ???
  inline def extractOffset(ref: BufferRef): Int = ???
```

**Alternative**: Use a value class with compile-time-only fields:

```scala
opaque type BufferRef = AnyVal
// Fields are erased, only buffer access remains in generated JS
```

#### 4. Primitive Views (Opaque Types)

Zero-allocation view types using opaque types:

```scala
opaque type F32View = BufferRef

object F32View:
  inline def apply(buffer: ArrayBuffer, offset: Int): F32View =
    BufferRef.encode(buffer, offset)

  extension (view: F32View)
    inline def get: Float =
      val buffer = BufferRef.extractBuffer(view)
      val offset = BufferRef.extractOffset(view)
      DataView(buffer).getFloat32(offset, littleEndian = true)

    inline def set(value: Float): Unit =
      val buffer = BufferRef.extractBuffer(view)
      val offset = BufferRef.extractOffset(view)
      DataView(buffer).setFloat32(offset, value, littleEndian = true)

// Similar for U8View, F64View, etc.
// All inline - no actual F32View objects allocated at runtime!
```

**Key Insight**: The `F32View` type exists only at compile time. After inlining, the generated JavaScript is just:

```javascript
dataView.getFloat32(offset, true); // Direct call, zero overhead
```

#### 5. Struct Layouts (Compile-Time Metadata)

Compile-time computation of struct layouts:

```scala
trait StructLayout[T <: Tuple]:
  inline def sizeInBytes: Int
  inline def fieldOffset(n: Int): Int
  type ViewType

// Computed via inline recursion on tuples
inline def computeLayout[T <: Tuple]: StructLayout[T] =
  inline erasedValue[T] match
    case _: EmptyTuple =>
      EmptyLayout
    case _: (head *: tail) =>
      val headSize = sizeOf[head]
      val tailLayout = computeLayout[tail]
      ConsLayout(headSize, tailLayout)
```

#### 6. Struct Views (Opaque Types + Inline Extensions)

For composite structures, use opaque types with inline field accessors:

```scala
// For structure (F32, F32, U8):
opaque type Particle = BufferRef

object Particle:
  // Layout computed at compile time
  private inline val layout = computeLayout[(F32.type, F32.type, U8.type)]

  inline def apply(buffer: ArrayBuffer, offset: Int): Particle =
    BufferRef.encode(buffer, offset)

  extension (p: Particle)
    // Each field accessor inlines to direct offset calculation
    inline def _0: F32View =
      F32View(BufferRef.extractBuffer(p), BufferRef.extractOffset(p) + 0)

    inline def _1: F32View =
      F32View(BufferRef.extractBuffer(p), BufferRef.extractOffset(p) + 4)

    inline def _2: U8View =
      U8View(BufferRef.extractBuffer(p), BufferRef.extractOffset(p) + 8)

// After inline expansion:
// particles(i)._0.get
// -> dataView.getFloat32(baseOffset + i * 9 + 0, true)
// Zero allocations!
```

#### 7. Array Views (Opaque Types)

For arrays of structures:

```scala
opaque type ArrayView[S] = BufferRef  // S is the struct type

object ArrayView:
  extension [S](arr: ArrayView[S])
    inline def apply(index: Int)(using layout: StructLayout[S]): S =
      val buffer = BufferRef.extractBuffer(arr)
      val baseOffset = BufferRef.extractOffset(arr)
      val stride = layout.sizeInBytes
      // Returns opaque struct view - no allocation
      ??? // Construct S at (baseOffset + index * stride)

    inline def length(using layout: StructLayout[S]): Int =
      val byteLength = ??? // stored in metadata
      byteLength / layout.sizeInBytes
```

## API Design

### Phase 1: Indexed Access (Foundation)

#### Varargs API for Anonymous Structs

```scala
import bufferdata.*

// Define a struct type with varargs
val Particle = struct(F32, F32, U8)
// Particle: StructLayout[...]

// Create a buffer for 100 particles
val particles = Particle.allocate(100)
// particles: ArrayView[Particle]

// Access individual particles with indexed fields
val p0 = particles(0)
p0._0.set(1.75f)  // field 0
p0._1.set(70.5f)  // field 1
p0._2.set(25)     // field 2

// Read values
val x = p0._0.get  // Returns Float
val y = p0._1.get  // Returns Float
val life = p0._2.get  // Returns Byte (from U8)
```

**Key Points**:

- Varargs syntax: `struct(F32, F32, U8)` - clean, no nested tuples
- Indexed access: `_0`, `_1`, `_2` - simple, generated
- All inline - compiles to direct DataView calls

#### Nested Structures with Indexed Access

```scala
// Inner struct: position (x, y)
val Vec2 = struct(F32, F32)

// Outer struct: entity (position, velocity, health)
val Entity = struct(Vec2, Vec2, U8)

// Allocate array
val entities = Entity.allocate(50)

// Access nested fields with indices
entities(0)._0._0.set(10.5f)  // position.x
entities(0)._0._1.set(20.3f)  // position.y
entities(0)._1._0.set(1.0f)   // velocity.x
entities(0)._1._1.set(-2.0f)  // velocity.y
entities(0)._2.set(100)       // health
```

### Phase 2: Named Field Access (Later Addition)

Using **Scala 3 named tuples** to generate named accessors with **zero runtime cost**:

#### Named Tuple API (Recommended)

```scala
// Define struct with named fields using Scala 3 named tuples
val Person = struct(height: F32, weight: F32, age: U8)
// Person: StructLayout[(height: F32, weight: F32, age: U8)]

// Usage - idiomatic Scala with dot notation
val persons = Person.allocate(100)
persons(0).height.set(1.75f)
persons(0).weight.set(70.5f)
persons(0).age.set(25)

val h = persons(0).height.get  // Returns Float
```

**Why Named Tuples?**
- ✅ Natural extension of varargs API
- ✅ Clearly distinguishes binary structs from regular case classes
- ✅ Explicit about working with data buffers
- ✅ Lightweight, compile-time only
- ✅ Consistent with existing `struct()` syntax

**How it works**:

```scala
// Named tuple syntax in Scala 3:
// struct(height: F32, weight: F32, age: U8)
// Desugars to: struct((height = F32, weight = F32, age = U8))

// Macro processes named tuple at compile time:
opaque type Person = BufferRef

object Person:
  inline def allocate(count: Int): ArrayView[Person] = ???

  extension (p: Person)
    // Generated from named tuple field names
    inline def height: F32View =
      F32View(extractBuffer(p), extractOffset(p) + 0)

    inline def weight: F32View =
      F32View(extractBuffer(p), extractOffset(p) + 4)

    inline def age: U8View =
      U8View(extractBuffer(p), extractOffset(p) + 8)

// After inline expansion:
// persons(0).height.get
// -> dataView.getFloat32(baseOffset + 0, true)
// Zero allocations, direct call!
```

#### Hybrid - Indexed + Named

Both access patterns work on the same struct:

```scala
val Person = struct(height: F32, weight: F32, age: U8)

// Named access (ergonomic)
persons(0).height.set(1.75f)

// Indexed access (always available)
persons(0)._0.set(1.75f)

// Both compile to identical JavaScript!
```

#### Alternative: Type Alias Pattern

For more explicit struct definitions:

```scala
type Person = (height: F32, weight: F32, age: U8)
val PersonLayout = struct[Person]

// Or inline:
val persons = struct[Person].allocate(100)
persons(0).height.set(1.75f)
```

**Implementation Strategy**:

- Parse named tuple type signature
- Extract field names from tuple labels
- Generate opaque type + extension methods
- Compute field offsets at compile time
- All accessors inline to direct DataView calls
- Indexed accessors (`_0`, `_1`) remain available

**Key Advantages**:
- Zero-cost named access! Field names exist only at compile time
- Clear distinction from case classes (binary data vs. domain objects)
- Natural evolution from anonymous `struct(F32, F32, U8)`
- No runtime representation of field names

## Complete Example: Indexed Access with Zero-Cost Abstraction

Here's a comprehensive example showing how the library achieves zero-cost abstraction starting with indexed access:

### Step 1: Define Structs with Varargs (Phase 1 - Indexed Access)

```scala
import bufferdata.*

// Define primitive structs
val Vec2 = struct(F32, F32)  // x, y

val Color = struct(U8, U8, U8, U8)  // r, g, b, a

// Define composite struct with nested types
val Particle = struct(Vec2, Vec2, Color, F32)  // position, velocity, color, life
```

### Step 2: Use the Structs with Indexed Access

```scala
// Allocate buffer for 10,000 particles
val particles = Particle.allocate(10000)

// Access with indexed fields
particles(0)._0._0.set(100.0f)  // position.x
particles(0)._0._1.set(50.0f)   // position.y
particles(0)._1._0.set(5.0f)    // velocity.x
particles(0)._1._1.set(-2.0f)   // velocity.y
particles(0)._2._0.set(255)     // color.r
particles(0)._2._1.set(128)     // color.g
particles(0)._2._2.set(0)       // color.b
particles(0)._2._3.set(255)     // color.a
particles(0)._3.set(1.0f)       // life

// Read values
val x = particles(0)._0._0.get  // position.x - Returns Float
val life = particles(0)._3.get   // life - Returns Float

// Iterate efficiently - zero allocations
for i <- 0 until 10000 do
  val p = particles(i)
  val vx = p._1._0.get  // velocity.x
  val vy = p._1._1.get  // velocity.y
  val px = p._0._0.get  // position.x
  val py = p._0._1.get  // position.y
  p._0._0.set(px + vx)  // update position.x
  p._0._1.set(py + vy)  // update position.y
  p._3.set(p._3.get - 0.01f)  // update life
```

**Note**: This is verbose but proves the zero-cost foundation. Named access (Phase 2) adds ergonomics on top.

### Step 2b: Same Example with Named Tuples (Phase 2 - Named Access)

Once Phase 1-3 are proven zero-cost, add named fields:

```scala
import bufferdata.*

// Define structs with named fields using named tuples
val Vec2 = struct(x: F32, y: F32)

val Color = struct(r: U8, g: U8, b: U8, a: U8)

val Particle = struct(
  position: Vec2,
  velocity: Vec2,
  color: Color,
  life: F32
)

// Allocate buffer for 10,000 particles
val particles = Particle.allocate(10000)

// Access with named fields - much more readable!
particles(0).position.x.set(100.0f)
particles(0).position.y.set(50.0f)
particles(0).velocity.x.set(5.0f)
particles(0).velocity.y.set(-2.0f)
particles(0).color.r.set(255)
particles(0).color.g.set(128)
particles(0).color.b.set(0)
particles(0).color.a.set(255)
particles(0).life.set(1.0f)

// Read values
val x = particles(0).position.x.get  // Returns Float
val life = particles(0).life.get      // Returns Float

// Iterate efficiently - still zero allocations
for i <- 0 until 10000 do
  val p = particles(i)
  val vx = p.velocity.x.get
  val vy = p.velocity.y.get
  p.position.x.set(p.position.x.get + vx)
  p.position.y.set(p.position.y.get + vy)
  p.life.set(p.life.get - 0.01f)
```

**Key**: Named tuple version compiles to **identical JavaScript** as indexed version!

### Step 3: Macro-Generated Code (Conceptual)

The inline macro processes named tuples and generates:

```scala
// For Vec2 with named tuple:
// struct(x: F32, y: F32)

opaque type Vec2 = BufferRef

object Vec2:
  // Layout metadata (compile-time constant)
  given StructLayout[Vec2] with
    inline def sizeInBytes: Int = 8  // 2 * 4 bytes

  inline def allocate(count: Int): ArrayView[Vec2] =
    val buffer = new ArrayBuffer(count * 8)
    ArrayView.wrap[Vec2](buffer, 0, count)

  extension (v: Vec2)
    // Named accessors from tuple labels
    inline def x: F32View =
      F32View(extractBuffer(v), extractOffset(v) + 0)

    inline def y: F32View =
      F32View(extractBuffer(v), extractOffset(v) + 4)

    // Indexed accessors still available
    inline def _0: F32View = x
    inline def _1: F32View = y

// For Color:
opaque type Color = BufferRef

object Color:
  given StructLayout[Color] with
    inline def sizeInBytes: Int = 4  // 4 * 1 byte

  extension (c: Color)
    inline def r: U8View = U8View(extractBuffer(c), extractOffset(c) + 0)
    inline def g: U8View = U8View(extractBuffer(c), extractOffset(c) + 1)
    inline def b: U8View = U8View(extractBuffer(c), extractOffset(c) + 2)
    inline def a: U8View = U8View(extractBuffer(c), extractOffset(c) + 3)

// For Particle:
opaque type Particle = BufferRef

object Particle:
  given StructLayout[Particle] with
    inline def sizeInBytes: Int = 20  // Vec2(8) + Vec2(8) + Color(4) + F32(4) = 24

  inline def allocate(count: Int): ArrayView[Particle] =
    val buffer = new ArrayBuffer(count * 20)
    ArrayView.wrap[Particle](buffer, 0, count)

  extension (p: Particle)
    inline def position: Vec2 =
      Vec2.wrap(extractBuffer(p), extractOffset(p) + 0)

    inline def velocity: Vec2 =
      Vec2.wrap(extractBuffer(p), extractOffset(p) + 8)

    inline def color: Color =
      Color.wrap(extractBuffer(p), extractOffset(p) + 16)

    inline def life: F32View =
      F32View(extractBuffer(p), extractOffset(p) + 20)
```

### Step 4: Inline Expansion

When the Scala compiler inlines everything:

```scala
// This Scala code:
particles(0).position.x.set(100.0f)

// Inlines to (conceptual intermediate):
val particle = particles.apply(0)              // ArrayView.apply
val position = particle.position               // Particle extension
val x = position.x                             // Vec2 extension
x.set(100.0f)                                 // F32View extension

// Further inlines to:
val buffer = particles.buffer
val particleOffset = 0 * 20  // index * stride
val positionOffset = particleOffset + 0
val xOffset = positionOffset + 0
val view = new DataView(buffer)
view.setFloat32(xOffset, 100.0f, true)

// Final inline expansion:
dataView.setFloat32(0, 100.0f, true)
```

### Step 5: Generated JavaScript Output

The actual JavaScript emitted by Scala.js:

```javascript
// Allocation
const particles_buffer = new ArrayBuffer(200000); // 10000 * 20 bytes
const particles_view = new DataView(particles_buffer);

// particles(0).position.x.set(100.0f)
particles_view.setFloat32(0, 100.0, true);

// particles(0).velocity.y.get
const vy = particles_view.getFloat32(12, true); // offset 8 + 4

// The loop
for (let i = 0; i < 10000; i++) {
	const baseOffset = i * 20;
	const vx = particles_view.getFloat32(baseOffset + 8, true);
	const vy = particles_view.getFloat32(baseOffset + 12, true);
	const px = particles_view.getFloat32(baseOffset + 0, true);
	const py = particles_view.getFloat32(baseOffset + 4, true);
	particles_view.setFloat32(baseOffset + 0, px + vx, true);
	particles_view.setFloat32(baseOffset + 4, py + vy, true);
	const life = particles_view.getFloat32(baseOffset + 20, true);
	particles_view.setFloat32(baseOffset + 20, life - 0.01, true);
}
```

**Result**: Zero abstraction overhead! The JavaScript is identical to what you'd write by hand.

### Comparison Table

| Aspect                 | Scala Source                       | Generated JavaScript         |
| ---------------------- | ---------------------------------- | ---------------------------- |
| **Lines of code**      | 8 lines (struct defs)              | 0 lines (just uses DataView) |
| **Runtime objects**    | 0 (opaque types)                   | 0 (just buffer + view)       |
| **Abstraction layers** | 4 levels (Particle→Vec2→x→F32View) | 0 (direct DataView call)     |
| **Type safety**        | Full (compile-time)                | N/A (dynamic JS)             |
| **Field names**        | Named (position.x)                 | Erased (just offsets)        |
| **Memory overhead**    | 0 bytes                            | 0 bytes                      |
| **CPU overhead**       | 0%                                 | 0%                           |

## Implementation Strategy

### Implementation Approach

**Priority**: Build a proven zero-cost foundation with indexed access before adding ergonomic features.

**Phases**:

1. **Phase 1-3**: Core functionality with indexed access (MUST BE ZERO-COST)
2. **Phase 4-5**: Named access layer (built on proven foundation)
3. **Phase 6-7**: Advanced features and polish

**Validation at Each Phase**:

- Inspect generated JavaScript output
- Verify zero allocations with profiler
- Micro-benchmark against hand-written DataView code
- Must achieve 0% overhead before proceeding

### Phase 1: Core Infrastructure (Zero-Cost Foundation)

1. **Define PrimitiveType enum**
   - All supported primitive types: F32, F64, I8, I16, I32, U8, U16, U32
   - Size and alignment information as compile-time constants

2. **Implement BufferRef encoding**
   - Opaque type for buffer + offset encoding
   - Inline encode/decode methods
   - Start with tuple encoding `(ArrayBuffer, Int)` for simplicity
   - Optimize later if needed

3. **Implement primitive view opaque types**
   - F32View, F64View, I8View, I16View, I32View, U8View, U16View, U32View
   - All as `opaque type XView = BufferRef`
   - Inline extension methods for get/set that directly call DataView
   - Test each primitive type, verify zero allocations in generated JS

### Phase 2: Indexed Struct Access (Anonymous Structs)

4. **Implement inline layout computation from varargs**
   - Inline recursive function to compute struct size from field sequence
   - Inline function to compute field offsets
   - Type-level accumulation using match types on Tuple (varargs desugar to tuples)

5. **Implement struct() constructor with varargs**
   - Takes varargs of primitive types: `struct(F32, F32, U8)`
   - Desugars to tuple at compile time, processed via inline recursion
   - Returns StructLayout instance with compile-time metadata
   - Generate unique opaque type per struct shape

6. **Generate indexed struct accessors**
   - Extension methods `_0`, `_1`, `_2`, etc. for field access
   - All inline, compute offset as `baseOffset + fieldOffset`
   - Returns appropriate primitive view opaque type
   - Verify generated JS has zero intermediate allocations

### Phase 3: Array Support

7. **Implement ArrayView opaque type**
   - `opaque type ArrayView[S] = BufferRef`
   - Inline `apply(index: Int)` computes `baseOffset + index * stride`
   - Returns struct view at correct offset

8. **Add allocate() to StructLayout**
   - Takes count parameter
   - Allocates ArrayBuffer of size `count * stride`
   - Returns ArrayView[S] wrapping the buffer

### Phase 4: Named Field Access (Optional Enhancement - After Foundation Proven)

**Prerequisites**: Phase 1-3 must be complete and verified zero-cost before starting Phase 4.

9. **Extend struct() to support named tuples**
   - Detect when varargs have Scala 3 named parameters: `struct(x: F32, y: F32)`
   - Extract field names from named tuple type information
   - Validates all fields are valid buffer types
   - Reuses offset calculation logic from Phase 2

10. **Generate named field accessors**
    - For structs with named tuples, generate:
      - Extension methods for each named field
      - Keep indexed accessors (`_0`, `_1`) as aliases
      - All inline to direct offset calculations (same as indexed)
    - Example:
      ```scala
      val Vec2 = struct(x: F32, y: F32)
      // Generates:
      // extension (v: Vec2)
      //   inline def x: F32View = ...
      //   inline def y: F32View = ...
      //   inline def _0: F32View = x
      //   inline def _1: F32View = y
      ```
    - Verify named access compiles to same JS as indexed access

11. **Macro utilities**
    - Type class for extracting named tuple field labels
    - Recursive support for nested structs with names
    - Error messages for invalid field types
    - Validation that field names are valid identifiers

### Phase 5: Advanced Nesting (Optional - Build on Phase 4)

12. **Enable nested structs with named fields**
    - Allow named struct types as fields:
      ```scala
      val Vec2 = struct(x: F32, y: F32)
      val Entity = struct(pos: Vec2, hp: U8)
      ```
    - Recursive layout computation (reuse Phase 2 logic)
    - Nested field access: `entities(0).pos.x.get`
    - All still inline to direct DataView calls
    - Compare generated JS to Phase 3 nested indexed access

13. **Comprehensive nesting tests**
    - Simple nesting (2 levels)
    - Deep nesting (3+ levels)
    - Mixed primitive and struct fields
    - Verify zero allocations at all nesting levels
    - Performance parity with indexed access
    - Both named and indexed access patterns work

### Phase 6: Advanced Features & Optimization

14. **Direct value access (ergonomic convenience)**
    - Instead of `.get`/`.set(x)`, allow direct access where possible
    - Consider value class wrappers that inline completely
    - Example: `person.age = 25` instead of `person.age.set(25)`

15. **Compile-time validation**
    - Size assertions (buffer must be large enough)
    - Alignment checks
    - Type compatibility for nested structs

16. **Helper methods**
    - Bulk operations: `copyFrom`, `fill`, `clear`
    - Slice operations for sub-arrays
    - Interop with TypedArrays (Float32Array, Uint8Array)

17. **Performance verification**
    - Generate and inspect JavaScript output
    - Micro-benchmarks against hand-written DataView code
    - Verify zero allocations in hot paths

### Phase 7: Documentation & Polish

18. **Comprehensive examples**
    - Game entity systems (position, velocity, health)
    - WebGL vertex buffer management
    - Binary protocol parsing
    - Data streaming pipelines

19. **Performance guide**
    - Best practices for layout design
    - When to use alignment vs packed layouts
    - Endianness considerations
    - Memory access patterns

20. **Migration from runtime classes**
    - Document why opaque types are used
    - Show generated code examples
    - Debugging tips for inline-heavy code

## Technical Challenges & Solutions

### Challenge 1: Compile-Time Tuple Processing

**Problem**: Need to process tuples of arbitrary length at compile time

**Solution**:

- Use Scala 3 match types to recursively process tuple structure
- Use inline recursion with tuple Head/Tail operations
- Generate offset calculations per field using compile-time recursion

```scala
inline def computeOffsets[T <: Tuple, Offset <: Int]: List[Int] =
  inline erasedValue[T] match
    case _: EmptyTuple => Nil
    case _: (head *: tail) =>
      constValue[Offset] :: computeOffsets[tail, Offset + SizeOf[head]]
```

### Challenge 2: Offset Calculation

**Problem**: Fields must be properly aligned (e.g., F32 at 4-byte boundaries)

**Solution**:

- Each type knows its alignment requirement
- During layout computation, insert padding as needed
- Use inline methods to compute offsets at compile time
- All offset arithmetic resolved during compilation, not at runtime

### Challenge 3: Type Preservation Through Nesting

**Problem**: When nesting, need to preserve exact type information

**Solution**:

- Use path-dependent types: `layout.ViewType`
- Each StructLayout has an associated ViewType
- Opaque types preserve type safety while eliminating runtime representation
- Macros compose nested layouts recursively at compile time

### Challenge 4: True Zero-Cost Abstraction

**Problem**: Want zero runtime overhead - no object allocations per access

**Solution**:

- Use **opaque types** instead of runtime classes
- Aggressive use of `inline` on all hot paths
- BufferRef encoding strategy to pass buffer + offset efficiently
- After inline expansion, generated JS is just direct DataView calls
- Verify generated JavaScript code has no abstraction layers

**Critical**: The opaque type approach means:

```scala
particles(0)._0.get  // Looks like 3 operations
// Compiles to:
dataView.getFloat32(offset, true)  // Single direct call
```

### Challenge 5: BufferRef Encoding Strategy

**Problem**: How to efficiently pass buffer + offset through opaque types

**Solutions Considered**:

**Option A - Long Encoding** (32-bit handle + 32-bit offset):

```scala
opaque type BufferRef = Long

// Store buffers in global WeakMap, use handle
private val bufferRegistry = js.WeakMap[Int, ArrayBuffer]()
private var nextHandle = 0

inline def encode(buffer: ArrayBuffer, offset: Int): BufferRef =
  val handle = bufferRegistry.get(buffer).getOrElse {
    val h = nextHandle
    nextHandle += 1
    bufferRegistry.set(h, buffer)
    h
  }
  ((handle.toLong << 32) | offset.toLong).asInstanceOf[BufferRef]
```

**Option B - Tuple Encoding** (simpler, might allocate):

```scala
opaque type BufferRef = (ArrayBuffer, Int)

inline def encode(buffer: ArrayBuffer, offset: Int): BufferRef =
  (buffer, offset).asInstanceOf[BufferRef]

inline def extractBuffer(ref: BufferRef): ArrayBuffer =
  ref.asInstanceOf[(ArrayBuffer, Int)]._1
```

**Option C - Direct Parameters** (most efficient, requires careful design):

```scala
// Don't encode - pass buffer and offset separately through inline parameters
inline def get(inline buffer: ArrayBuffer, inline offset: Int): Float =
  DataView(buffer).getFloat32(offset, true)
```

**Recommendation**: Start with Option B (tuple) for simplicity, optimize to Option C if needed

### Challenge 6: Endianness

**Problem**: Different platforms use different byte ordering

**Solution**:

- Default to little-endian (most common, matches x86/ARM)
- Make endianness configurable per-layout
- Could add BigEndian/LittleEndian phantom types:

```scala
opaque type F32View[Endian <: Endianness] = BufferRef

trait Endianness
object LittleEndian extends Endianness
object BigEndian extends Endianness

extension [E <: Endianness](view: F32View[E])
  inline def get: Float =
    inline erasedValue[E] match
      case _: LittleEndian.type => /* littleEndian = true */
      case _: BigEndian.type => /* littleEndian = false */
```

## Testing Strategy

### Unit Tests

1. **Primitive views**: Test each primitive type's get/set
2. **Struct layout**: Verify size and offset calculations
3. **Array access**: Test index bounds and stride calculations
4. **Nesting**: Verify nested struct access works correctly

### Integration Tests

1. **Interop with JavaScript**: Verify generated buffers can be read by JS code
2. **Performance**: Compare against hand-written DataView code
3. **Generated code inspection**: Verify inline optimization works

### Property-Based Tests

1. **Round-trip**: set(x).get == x for all primitive types
2. **Index safety**: Array access at valid indices works, invalid throws
3. **Alignment**: All accesses are properly aligned

## Performance Considerations

### Memory Layout

- Pack structs tightly but respect alignment
- Consider offering both packed and aligned variants
- Padding bytes should be minimized

### JavaScript Output

- All hot path methods must inline completely
- Final JS should be direct DataView method calls
- No intermediate allocations or type checks

### Micro-Benchmarks

Compare against:

1. Hand-written DataView code
2. JavaScript TypedArray views (Float32Array, etc.)
3. Regular JavaScript objects

Target: < 5% overhead vs hand-written code

## Future Enhancements

### 1. Schema Reflection

- Runtime schema information for debugging/serialization
- JSON schema generation
- Binary format documentation

### 2. Versioning & Migration

- Schema evolution support
- Automated migration between versions
- Backward compatibility helpers

### 3. Validation

- Runtime bounds checking (debug mode)
- Type invariants
- Assertions on data integrity

### 4. Advanced Types

- Fixed-size arrays within structs
- Enums backed by integers
- Bit fields for compact boolean storage
- String support (UTF-8 encoded, fixed or variable length)

### 5. SIMD Support

- When Scala.js gains WASM support
- Vectorized operations on arrays
- SIMD-friendly memory layouts

### 6. Memory Management

- Buffer pooling and reuse
- Automatic resizing for dynamic arrays
- Reference counting for shared buffers

### 7. Serialization

- MessagePack encoding/decoding
- Protocol Buffers compatibility
- FlatBuffers-style zero-copy access

## Alternatives Considered

### Alternative 1: TypedArray-Based

Use Float32Array, Uint8Array, etc. instead of DataView

**Pros**: Simpler, native iteration
**Cons**: Cannot mix types in same buffer, less flexible

**Decision**: Use DataView for flexibility

### Alternative 2: Runtime Layout Description

Build layouts at runtime with builder pattern

**Pros**: Simpler implementation, more dynamic
**Cons**: Runtime overhead, no compile-time safety

**Decision**: Use compile-time layouts for zero-cost

### Alternative 3: Runtime Classes with Inline Methods

Use actual class hierarchy (F32View, StructView, etc.) with inline methods

**Pros**: Simpler mental model, familiar OOP patterns
**Cons**: Still allocates objects even with inline get/set, not truly zero-cost

**Decision**: Use opaque types + inline methods for true zero-cost abstraction

### Alternative 4: Fully Macro-Generated

Generate all code via macros without any intermediate abstractions

**Pros**: Maximum optimization potential, truly zero-cost
**Cons**: Complex macro code, harder to debug, worse IDE support, longer compile times

**Decision**: Use opaque types with inline methods + targeted macro generation for named fields (best of both worlds)

## Open Questions

1. **Endianness**: Default to little-endian? Make configurable? Per-field or per-struct?
2. **Alignment**: Strict alignment (like C) or packed (like C's `__attribute__((packed))`)?
3. **Naming**: How to access fields? Numeric (\_0, \_1) vs named (x, y) vs both?
4. **Safety**: Runtime bounds checking in debug mode? Zero-cost in release?
5. **Mutability**: Should we have immutable views that only expose get()?
6. **Buffer ownership**: Who owns the ArrayBuffer? Can we share across views?

## Success Criteria

1. **True Zero-Cost**: Generated JS code is identical to hand-written DataView code (0% overhead)
2. **Zero Allocations**: No object allocations in hot paths (field access, iteration)
3. **Named Field Access**: Idiomatic Scala dot notation with compile-time field names
4. **Correctness**: All tests pass, including JS interop and layout tests
5. **Ergonomics**: Concise, readable API comparable to regular Scala case classes
6. **Safety**: Compile-time type safety, layout validation, optional runtime bounds checking
7. **Composability**: Nested structs work seamlessly with same performance guarantees
8. **Verifiability**: Generated JavaScript is inspectable and matches expectations

### Performance Targets

| Operation                       | Target      | Verification Method                  |
| ------------------------------- | ----------- | ------------------------------------ |
| Single field read               | 0% overhead | Compare generated JS to hand-written |
| Single field write              | 0% overhead | Compare generated JS to hand-written |
| Nested field access (3 levels)  | 0% overhead | Verify no intermediate objects       |
| Array iteration (1000 elements) | 0% overhead | Micro-benchmark vs TypedArray        |
| Allocations per field access    | 0           | Runtime instrumentation              |

### Code Quality Targets

| Aspect                | Target                                   |
| --------------------- | ---------------------------------------- |
| API verbosity         | Comparable to regular Scala case classes |
| Compile time increase | < 20% vs equivalent runtime classes      |
| Error message clarity | Clear indication of layout errors        |
| IDE support           | Full autocomplete for field names        |

## Next Steps: Ready to Implement

### Phase 1-3: Foundation (Start Here)

These phases must be completed and verified zero-cost before proceeding to Phase 4.

#### Week 1: Phase 1 - Core Infrastructure

1. **Set up project structure**
   - Create `src/bufferdata/` package structure
   - Configure test infrastructure with JS output inspection
   - Add ability to view generated JavaScript

2. **Implement PrimitiveType enum**

   ```scala
   enum PrimitiveType(val byteSize: Int, val readerName: String, val writerName: String):
     case F32 extends PrimitiveType(4, "getFloat32", "setFloat32")
     case U8 extends PrimitiveType(1, "getUint8", "setUint8")
     // ... others
   ```

3. **Implement BufferRef opaque type**

   ```scala
   opaque type BufferRef = (ArrayBuffer, Int)
   // With inline encode/decode methods
   ```

4. **Implement primitive view opaque types**

   ```scala
   opaque type F32View = BufferRef
   // With inline get/set extensions
   ```

5. **Validate Phase 1**
   - Write test: `F32View.get` and `F32View.set`
   - Inspect generated JS - must be direct `dataView.getFloat32()` call
   - Verify zero allocations

#### Week 2: Phase 2 - Indexed Struct Access

6. **Implement varargs struct() constructor**

   ```scala
   inline def struct(inline fields: PrimitiveType*): StructLayout = ???
   ```

7. **Implement inline offset calculation**
   - Recursive inline function on tuple types
   - Generate field offset constants

8. **Generate indexed accessors (\_0, \_1, \_2)**
   - Inline extension methods
   - Return appropriate primitive views

9. **Validate Phase 2**
   - Test: `val S = struct(F32, F32, U8)`
   - Test: `S._0.set(1.0f)`, `S._1.get`
   - Inspect generated JS - must be direct DataView calls with computed offsets
   - Verify zero allocations

#### Week 3: Phase 3 - Arrays

10. **Implement ArrayView opaque type**

    ```scala
    opaque type ArrayView[S] = BufferRef
    // With inline apply(index: Int)
    ```

11. **Implement allocate() method**
    - Allocates ArrayBuffer
    - Returns ArrayView

12. **Validate Phase 3**
    - Test: `val particles = Particle.allocate(100)`
    - Test: `particles(0)._0.set(x)` in loop
    - Inspect generated JS - must be simple loop with DataView calls
    - Profile: verify ZERO allocations in loop

#### Foundation Checkpoint

**STOP HERE** if any phase fails validation. The foundation must be proven zero-cost before continuing.

### Phase 4-5: Named Access (Only After Foundation Proven)

#### Week 4+: Phase 4 - Named Fields

Only proceed if Phase 1-3 achieved 0% overhead.

13. **Extend struct() for named tuples**
    - Detect Scala 3 named parameters: `struct(x: F32, y: F32)`
    - Extract field names from tuple type labels
    - Generate named extension methods alongside indexed ones
    - Example test:
      ```scala
      val Vec2 = struct(x: F32, y: F32)
      val v = Vec2.allocate(1)(0)
      v.x.set(1.0f)  // Named access
      v._0.set(1.0f) // Indexed access - both work!
      ```

14. **Validate Phase 4**
    - Compare generated JS: named vs indexed
    - Must be identical except for identifier names
    - Same performance benchmarks
    - Both access patterns compile to same DataView calls

### Success Criteria (Phase 1-3 Must Achieve)

- [ ] **Generated JS**: Direct DataView calls, zero abstraction
- [ ] **Allocations**: Zero in all hot paths (profiler confirmed)
- [ ] **Performance**: 0% overhead vs hand-written DataView (< 0.1% variance)
- [ ] **Correctness**: All tests pass, layout matches expectations
- [ ] **Composability**: Nested structs work (Phase 3)

### Validation Commands

```bash
# Compile and inspect JS output
scala-cli --power package . --js -o dist/test.js --force
cat dist/test.js | grep -A5 "particles"  # Inspect generated code

# Run tests
scala-cli test .

# Profile (add profiling code to tests)
# Verify zero allocations in loop
```
