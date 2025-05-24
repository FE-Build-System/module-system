// (function (root, factory) {
//   if (typeof define === "function" && define.amd) {
//     console.log("This add module is treated as an AMD module.");
//     define([], factory);
//   } else if (typeof module === "object" && module.exports) {
//     console.log("This add module is treated as an CJS module.");
//     module.exports = factory();
//   } else {
//     console.log("This add module is set as a property of root.");
//     root.add = factory();
//   }
// })(typeof self !== "undefined" ? self : this, function () {
//   console.log("This is add module");

//   return function (a, b) {
//     return a + b;
//   };
// });

// export default function (a, b) {
//   return a + b;
// }

const { print } = require("./sub_add.cjs");

console.log("print", print());

module.exports.add = function (a, b) {
  return a + b;
};
module.exports.test = 123;
