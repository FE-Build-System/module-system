import { add, subtract, multiply } from "./esm_math.mjs";

export const greet = (name) => {
  console.log(add(1, 2));
  console.log(`Hello, ${name}!`);
};

greet("World");
