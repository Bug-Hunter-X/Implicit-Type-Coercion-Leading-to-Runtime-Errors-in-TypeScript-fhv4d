function add(a: number, b: number): number {
  return a + b;
}

// Using Type Assertion
let result1 = add(1, Number("2"));
console.log(result1); //This is now type-safe and will correctly add numbers.

// Alternatively, use strict type checking and prevent implicit any
//Set "strictNullChecks": true and "noImplicitAny": true in tsconfig.json

//This will now produce a compilation error if you try to pass a string to the add function
let result2 = add(1, "2"); 