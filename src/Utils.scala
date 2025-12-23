package example

import scala.scalajs.js

object Utils:
  def greet(name: String): String =
    s"Hello, $name!"

  def platformInfo: String =
    "Scala.js on Node.js"

  def timestamp: Double =
    js.Date.now()
