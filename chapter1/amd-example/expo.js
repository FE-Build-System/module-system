// expo.js
define("expo", ["math"], function (math) {
  return {
    square: function (a) {
      return math.multiply(a, a);
    },
  };
});
