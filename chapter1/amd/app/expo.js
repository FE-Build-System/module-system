// expo.js
define(["app/math"], function (math) {
  return {
    square: function (a) {
      return math.multiply(a, a);
    },
  };
});

/*
// Or like this
define(function (require) {
  var math = require("app/math");
  return {
    square: function (a) {
      return math.multiply(a, a);
    },
  };
});
//*/
