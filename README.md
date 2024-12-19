# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript where a function expects a string argument but receives an array of strings.  The solution shows how to correctly handle this scenario.

## Bug
The `greeter` function expects a single string argument. However, the code attempts to pass an array of strings. This results in a type error.

## Solution
The solution iterates through the array of strings and applies the `greeter` function to each element, effectively solving the type mismatch.