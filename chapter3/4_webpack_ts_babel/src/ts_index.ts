import { add, subtract, multiply, divide } from "./ts_math";

export const greet = (name: string): void => {
  const result = { a: 123, b: 123 };
  console.log(add(1, 2));
  console.log(`Hello, ${name}!`, { ...result });
};

greet("World");
