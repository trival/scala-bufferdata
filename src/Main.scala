package example

@main def app(): Unit =
  println("Hello from Scala.js!")
  println(s"Running on: ${Utils.platformInfo}")
  println(s"${Utils.greet("Developer")}")
  println(s"Current timestamp: ${Utils.timestamp}")
