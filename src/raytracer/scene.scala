package raytracer.scene

import bufferdata.*
import raytracer.vector.*
import raytracer.sphere.*
import raytracer.material.*
import raytracer.render.Renderer
import raytracer.render

case class Scene(
    world: StructArray[SphereSchema],
    camera: Renderer.Camera
)

def createDefaultScene(): Scene =
  val spheres = struct[SphereSchema].allocate(4)

  // Red Lambertian sphere (center)
  spheres(0).center.set(0, 0, -1)
  spheres(0).radius := 0.5
  spheres(0).material.setMaterialType(MaterialType.Lambertian)
  spheres(0).material.color.set(0.8, 0.2, 0.2)
  spheres(0).material.fuzz := 0.0

  // Green Metal sphere (left, no fuzz)
  spheres(1).center.set(-1, 0, -1)
  spheres(1).radius := 0.5
  spheres(1).material.setMaterialType(MaterialType.Metal)
  spheres(1).material.color.set(0.6, 0.8, 0.2)
  spheres(1).material.fuzz := 0.0

  // Blue Metal sphere (right, with fuzz)
  spheres(2).center.set(1, 0, -1)
  spheres(2).radius := 0.5
  spheres(2).material.setMaterialType(MaterialType.Metal)
  spheres(2).material.color.set(0.2, 0.5, 0.8)
  spheres(2).material.fuzz := 0.3

  // Gray Lambertian ground
  spheres(3).center.set(0, -100.5, -1)
  spheres(3).radius := 100.0
  spheres(3).material.setMaterialType(MaterialType.Lambertian)
  spheres(3).material.color.set(0.5, 0.5, 0.5)
  spheres(3).material.fuzz := 0.0

  val camera = Renderer.createCamera(
    origin = Vec3d(0, 0, 1),
    focalLength = 1.9,
    aspectRatio = 4.0 / 3.0
  )

  Scene(spheres, camera)
