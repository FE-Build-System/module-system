// main.js
require(["jquery", "app/math", "app/expo"], function ($, math, expo) {
  var sum = math.add(5, 3);
  var product = math.multiply(6, 7);
  var square = expo.square(5);

  $("#result").html(
    "5 + 3 = " +
      sum +
      "<br>6 * 7 = " +
      product +
      "<br>5<sup>2</sup> = " +
      square
  );
});
