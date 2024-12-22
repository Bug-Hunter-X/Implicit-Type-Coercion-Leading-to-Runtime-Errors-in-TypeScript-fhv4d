# Implicit Type Coercion in TypeScript

This repository demonstrates a common issue in TypeScript where implicit type coercion can lead to runtime errors that aren't caught during compilation.

## The Bug

The `add` function is declared to accept two numbers and return a number. However, in the example usage, a string is passed as the second argument.  TypeScript's type system doesn't prevent this, resulting in a runtime error due to the implicit coercion of the string to a number.

## The Solution

The solution involves employing stricter type checking and preventing implicit coercion.  This is achieved by either using explicit type assertions or enabling the `strictNullChecks` and `noImplicitAny` compiler options in your `tsconfig.json` file.