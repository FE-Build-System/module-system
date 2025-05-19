const { add, subtract, multiply } = require("./math_cjs.cjs");

const greet = (name) => {
  console.log(add(1, 2));
  console.log(`Hello, ${name}!`);
};

greet("World");
