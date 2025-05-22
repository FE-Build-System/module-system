export const add = (a, b) => {
  console.log("add", a, b);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  return a + b;
};
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
