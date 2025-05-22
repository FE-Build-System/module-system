import { add, subtract, multiply } from "./esm_math.mjs";

export const greet = (name) => {
  const result = { a: 123, b: 123 };
  console.log(add(1, 2));
  console.log(`Hello, ${name}!`, { ...result });
};

greet("World");
