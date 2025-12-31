# Raytracer Structs Implementation Status

## Progress
- Phase 1: Vector extensions added (`reflect`, `copyTo` for `Vec3d`) in `src/raytracer/vector.scala`.
- Phase 2: Core bufferdata structs added:
  - `Ray` in `src/raytracer/ray.scala`
  - `Material` (with nested type/color/fuzz) in `src/raytracer/material.scala`
  - `Sphere` (with nested `MaterialSchema`) in `src/raytracer/sphere.scala`
  - `Hit` (with nested `MaterialSchema`) in `src/raytracer/hit.scala`
- Build check: `scala-cli --power package . --js -o dist/main.js --force --server=false` succeeds (needed escalated permissions to write coursier cache).

## Deviations from Plan
- Material type now uses a Scala enum `MaterialType` with inline `toShort`/`fromShort` helpers; plan called for bare inline vals.
- Material helpers include `materialTypeEnum`/`setMaterialType` to work with the enum while still storing the underlying short in the struct.
- `Material.copyTo` uses an aliased import for `Vec3d.copyTo` to avoid extension-method name shadowing inside the material package.

## Outstanding (Not Implemented Yet)
- Phases 3–6 (hittable typeclass, rendering pipeline, scene setup, tests) remain to be implemented.
- Scene/render/test files from the plan are not yet present; behavior beyond struct definitions is pending.
