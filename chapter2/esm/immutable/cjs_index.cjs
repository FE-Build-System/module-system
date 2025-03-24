// index.cjs
const counter = require("./cjs_counter.cjs");
counter.value = 5; // 😱 value 값이 바뀌어버림
console.log(require("./cjs_counter.cjs")); // {value: 5}
