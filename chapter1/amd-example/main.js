// main.js
require(["math", "expo"], function (math, expo) {
  var sum = math.add(5, 3);
  var product = math.multiply(6, 7);
  var square = expo.square(5);

  console.log("덧셈 결과:", sum);
  console.log("곱셈 결과:", product);
  console.log("제곱 결과:", square);
});

/*
// 또는 이렇게도 가능
require(function (require) {
  var math = require("math");
  var expo = require("expo");

  var sum = math.add(5, 3);
  var product = math.multiply(6, 7);
  var square = expo.square(5);

  console.log("덧셈 결과:", sum);
  console.log("곱셈 결과:", product);
  console.log("제곱 결과:", square);
}); 
*/
