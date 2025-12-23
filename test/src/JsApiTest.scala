package example

import munit.FunSuite
import scala.scalajs.js
import scala.scalajs.js.JSON

class JsApiTest extends FunSuite:
  test("JavaScript Date API should be available"):
    val now = js.Date.now()
    assert(now > 0.0, "Date.now() should return a positive number")

  test("JavaScript Array methods should work"):
    val jsArray = js.Array(1, 2, 3, 4, 5)
    val doubled = jsArray.map(x => x * 2)
    assertEquals(doubled.toList, List(2, 4, 6, 8, 10))

  test("JavaScript JSON API should be available"):
    val obj = js.Dynamic.literal(
      name = "Test",
      value = 42
    )
    val jsonString = JSON.stringify(obj)
    assert(jsonString.contains("Test"))
    assert(jsonString.contains("42"))

  test("JavaScript Math functions should work"):
    assertEquals(js.Math.max(1.0, 5.0, 3.0), 5.0)
    assertEquals(js.Math.min(1.0, 5.0, 3.0), 1.0)
    assert(js.Math.PI > 3.14)

  test("JavaScript Promise should be available"):
    val promise = js.Promise.resolve[Int](42)
    // Note: For actual async testing, you'd want to use munit's async support
    assert(promise.isInstanceOf[js.Promise[Int]])
