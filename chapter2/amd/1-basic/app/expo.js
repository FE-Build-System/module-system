// expo.js
define(["app/math"], function (math) {
  return {
    square: function (a) {
      return math.multiply(a, a);
    },
  };
});

/*
// 또는 이렇게도 가능
define(function (require) {
  var math = require("app/math");
  return {
    square: function (a) {
      return math.multiply(a, a);
    },
  };
});
//*/
