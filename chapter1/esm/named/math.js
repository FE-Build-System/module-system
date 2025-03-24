// math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// main.js
import { add, multiply } from "./math.js";

console.log(add(5, 3));
console.log(multiply(6, 7));
