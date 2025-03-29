// index.cjs
const counter = require("./cjs_counter.cjs");
counter.value = 5; // 😱 value is replaced
console.log(require("./cjs_counter.cjs")); // {value: 5}
