# Raytracer Structs Implementation Status

## Progress

- Phase 1: Vector extensions added (`reflect`, `copyTo` for `Vec3d`) in `src/raytracer/vector.scala`.
- Phase 2: Core bufferdata structs added:
  - `Ray` in `src/raytracer/ray.scala`
  - `Material` (with nested type/color/fuzz) in `src/raytracer/material.scala`
  - `Sphere` (with nested `MaterialSchema`) in `src/raytracer/sphere.scala`
  - `Hit` (with nested `MaterialSchema`) in `src/raytracer/hit.scala`
- Phase 3: Hittable typeclass implemented with `Sphere` instance and `IterableOnce` aggregation in `src/raytracer/hittable.scala`.
- Phase 4 (complete): Rendering helpers in `src/raytracer/render.scala` (`skyColor`, `scatterRay`, `rayColor`, `Camera`/`createCamera`, `getRay`, `gammaCorrect`, `renderImage`).
- Phase 5: Scene setup in `src/raytracer/scene.scala` with default spheres and camera (colors/fuzz matched to TypeScript scene).
- JS entrypoint: `@JSExportTopLevel("renderRaytracer")` in `src/Main.scala` renders a scene to RGBA `ArrayBuffer` given width/height (defaults: samplesPerPixel=100, maxDepth=20).
- Build check: `scala-cli --power package . --js -o dist/main.js --force --server=false` succeeds (needed escalated permissions to write coursier cache).

## Deviations from Plan

- Material type now uses a Scala enum `MaterialType` with inline `toShort`/`fromShort` helpers; plan called for bare inline vals.
- Material helpers include `materialTypeEnum`/`setMaterialType` to work with the enum while still storing the underlying short in the struct.
- `Material.copyTo` uses an aliased import for `Vec3d.copyTo` to avoid extension-method name shadowing inside the material package.
- `rayColor` uses a `while` loop instead of `for` to avoid non-local returns in Scala 3; behavior matches the plan’s intent.
- `renderRaytracer` JS export added as the requested entrypoint returning `ArrayBuffer` (RGBA U8) for a given width/height; renderImage v-coordinate flipped to match TS orientation.

## Outstanding (Not Implemented Yet)

- Phase 6: Tests (munit) per plan.
