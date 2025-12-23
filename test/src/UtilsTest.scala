package example

import munit.FunSuite

class UtilsTest extends FunSuite:
  test("greet should return proper greeting"):
    val result = Utils.greet("Alice")
    assertEquals(result, "Hello, Alice!")

  test("platformInfo should contain Scala.js version"):
    val info = Utils.platformInfo
    assert(info.contains("Scala.js"))

  test("timestamp should return a valid number"):
    val ts = Utils.timestamp
    assert(ts > 0.0)
