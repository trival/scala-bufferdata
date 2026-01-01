package raytracer.render

import bufferdata.*
import scala.scalajs.js
import raytracer.vector.*
import raytracer.ray.*
import raytracer.hit.*
import raytracer.hittable.*
import raytracer.material.*
import raytracer.image.*
import numHelpers.*

object Renderer:

  type CameraSchema = (Vec3dSchema, Vec3dSchema, Vec3dSchema, Vec3dSchema)
  val CameraStruct = struct[CameraSchema]
  type Camera = StructRef[CameraSchema]

  extension (c: Camera)
    inline def position = c(0)
    inline def lowerLeft = c(1)
    inline def horizontal = c(2)
    inline def vertical = c(3)

  // temp, skyBlue, skyWhite
  type RendererCacheSchema =
    (
        Vec3dSchema,
        Vec3dSchema,
        Vec3dSchema,
        Vec3dSchema,
        RaySchema,
        RaySchema,
        HitSchema,
        Vec3dSchema,
        CameraSchema
    )
  type RendererCache = StructRef[RendererCacheSchema]

  extension (rc: RendererCache)
    inline def temp = rc(0)
    inline def temp2 = rc(1)
    inline def skyBlue = rc(2)
    inline def skyWhite = rc(3)
    inline def currentRay = rc(4)
    inline def scatteredRay = rc(5)
    inline def currentHit = rc(6)
    inline def attenuation = rc(7)
    inline def camera = rc(8)

  val renderCache = struct[RendererCacheSchema]()

  renderCache.skyBlue.set(0.5, 0.7, 1.0)
  renderCache.skyWhite.set(1.0, 1.0, 1.0)

  def setCamera(
      origin: (Double, Double, Double),
      focalLength: Double,
      aspectRatio: Double
  ): Unit =
    val camera = renderCache.camera

    camera.position.set(origin._1, origin._2, origin._3)

    val viewportHeight = 2.0
    val viewportWidth = aspectRatio * viewportHeight

    camera.horizontal.set(viewportWidth, 0, 0)
    camera.vertical.set(0, viewportHeight, 0)

    val temp = renderCache.temp
    val temp2 = renderCache.temp2

    temp := camera.position
    camera.horizontal.div(2.0, temp2)
    temp =- temp2
    camera.vertical.div(2.0, temp2)
    temp =- temp2
    temp2.set(0, 0, focalLength)
    temp =- temp2

    camera.lowerLeft := temp

  inline def skyColor(direction: Vec3d, target: Vec3d) =
    val unitDir = renderCache.temp
    direction.normalize(unitDir)
    val t = 0.5 * (unitDir.y() + 1.0)
    renderCache.skyWhite.lerp(renderCache.skyBlue, t, target)

  inline def scatterRay(
  ): Boolean =
    val temp = renderCache.temp
    val rayIn = renderCache.currentRay
    val rayOut = renderCache.scatteredRay
    val hit = renderCache.currentHit

    val matType = hit.material.materialTypeEnum

    if matType == MaterialType.Lambertian then
      temp.setRandomUnitVector()
      if temp.nearZero then temp := hit.normal

      rayOut.origin.set(hit.pos)
      hit.normal.add(temp, rayOut.direction)
      true
    else if matType == MaterialType.Metal then
      rayIn.direction.normalize(temp)
      temp.reflect(hit.normal, rayOut.direction)

      if hit.material.fuzz() > 0 then
        temp.setRandomInUnitSphere()
        temp =* hit.material.fuzz()
        rayOut.direction =+ temp

      rayOut.origin := hit.pos
      rayOut.direction.dot(hit.normal) > 0
    else false

  def rayColor[T: Hittable](
      initialRay: Ray,
      world: T,
      maxDepth: Int,
      target: Vec3d
  ): Unit =
    val hit = renderCache.currentHit
    val currentRay = renderCache.currentRay
    val scatteredRay = renderCache.scatteredRay
    val temp = renderCache.temp
    val attenuation = renderCache.attenuation

    currentRay.copyFrom(initialRay)
    attenuation.set(1.0, 1.0, 1.0)

    var depth = 0
    while depth < maxDepth do
      if rayHit(world, currentRay, 0.001, 100000.0, hit) then
        val scattered = scatterRay()

        if scattered then
          attenuation =* hit.material.color
          currentRay.copyFrom(scatteredRay)
        else
          target := hit.material.color
          target =* attenuation
          return
      else
        skyColor(currentRay.direction, target)
        target =* attenuation
        return

      depth += 1

    target.set(0)

  inline def getRay(camera: Camera, u: Double, v: Double, ray: Ray): Unit =
    ray.origin := camera.position

    val tmp = renderCache.temp
    val tmp2 = renderCache.temp2

    tmp := camera.lowerLeft

    tmp2 := (camera.horizontal)
    tmp2 =* u
    tmp =+ tmp2

    tmp2 := (camera.vertical)
    tmp2 =* v
    tmp =+ tmp2

    tmp =- camera.position

    ray.direction := tmp

  inline def gammaCorrect(color: Vec3d): Unit =
    color.x := Math.pow(color.x(), 0.7)
    color.y := Math.pow(color.y(), 0.7)
    color.z := Math.pow(color.z(), 0.7)

  def renderImage[T: Hittable](
      world: T,
      width: Int,
      height: Int,
      samplesPerPixel: Int,
      maxDepth: Int
  ): StructArray[ColorRGBASchema] =
    val pixels = struct[ColorRGBASchema].allocate(width * height)
    val ray = renderCache.currentRay
    val color = Vec3dStruct.allocate(1)(0)

    var y = 0
    while y < height do
      js.Dynamic.global.console.log(s"Rendering image row ${y + 1}")
      var x = 0
      while x < width do
        color.set(0, 0, 0)

        var s = 0
        while s < samplesPerPixel do
          val u = (x + Math.random()) / width
          val v = (height - y - 1 + Math
            .random()) / height // flip vertically to match TS output
          getRay(renderCache.camera, u, v, ray)
          rayColor(ray, world, maxDepth, color)
          s += 1

        color =/ samplesPerPixel.toDouble
        gammaCorrect(color)

        pixels(y * width + x).setFromVec3d(color)

        x += 1
      y += 1

    pixels
