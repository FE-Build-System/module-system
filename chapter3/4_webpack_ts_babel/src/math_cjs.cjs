const add = (a, b) => {
  console.log("add", a, b);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  return a + b;
};
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
