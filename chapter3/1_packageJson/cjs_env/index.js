// const add = require("./add.mjs");

// console.log("add(10, 5) = ", add(10, 5));

import("./add.mjs").then(({ default: add }) => {
  console.log("add(10, 5) = ", add(10, 5));
});
