// import add2 from "./add.js";

const add2 = require("./add.mjs");
// const add = require("./add.mjs");

process.env.TEST = "";

(async () => {
  const { default: add } = await import("./add.mjs");

  console.log("add", add(1, 2));
})();

// console.log("add(10, 5) = ", add(10, 2));
// console.log("add2(10, 5) = ", add2(10, 2));
