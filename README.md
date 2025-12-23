# Scala.js Project with Scala CLI

A multi-file Scala.js project using scala-cli as the build tool.

## Project Structure

```
.
├── project.scala      # Central configuration file for scala-cli
├── src/
│   ├── Main.scala     # Application entry point
│   └── Utils.scala    # Utility functions
└── test/
    └── src/
        ├── UtilsTest.scala  # Tests for Utils
        └── JsApiTest.scala  # Tests using JavaScript native APIs
```

## Configuration

All scala-cli configuration is centralized in `project.scala` using directives:

- `//> using scala 3.8.0-RC3` - Scala version
- `//> using platform js` - Enable Scala.js compilation
- `//> using jsModuleKind es` - Use ES modules output
- `//> using jsVersion 1.20.1` - Scala.js version
- `//> using test.dep org.scalameta::munit::1.2.1` - MUnit test framework

## Commands

### Compile
```bash
scala-cli compile .
```

### Run
```bash
scala-cli run .
```

### Package to JavaScript
```bash
mkdir -p dist
scala-cli --power package . --js -o dist/main.js --force

# Run packaged output (Node.js)
node dist/main.js

# Or use Bun for faster startup
bun dist/main.js
```

### Format code
```bash
scala-cli fmt .
```

### Watch mode (recompile on changes)
```bash
scala-cli run . --watch
```

## Testing

Tests are located in `test/src/` and use MUnit. All tests are compiled and run as Scala.js, allowing use of JavaScript native APIs.

### Run all tests
```bash
scala-cli test .
```

### Run tests in watch mode
```bash
scala-cli test . --watch
```

### Run specific test file
```bash
scala-cli test test/src/UtilsTest.scala
```

The test suite includes:
- `UtilsTest.scala` - Unit tests for application utilities
- `JsApiTest.scala` - Tests demonstrating JavaScript API access (Date, Array, JSON, Math, Promise)

All tests run in a Node.js environment as Scala.js code, ensuring that JavaScript APIs are available and behave correctly.

## Adding Dependencies

Add dependencies in `project.scala` using the `//> using dep` directive:

```scala
//> using dep "org.typelevel::cats-core::2.12.0"
//> using dep "io.circe::circe-core::0.14.10"
```

## Notes

- Node.js is required for scala-cli operations (compile, run, test)
- The packaged JavaScript output can be run with either Node.js or Bun
- All source files in `src/` will be compiled together
- The configuration in `project.scala` applies to all source files
- You can override any directive with command-line flags
