// main.js
const math = require("./math.js");

console.log(require.resolve.paths("./math.js"));
console.log(require.resolve.paths("jquery"));

console.log("\n\n");

console.log(require.cache);
