!(function (e, o) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = o();
  else if ("function" == typeof define && define.amd) define([], o);
  else {
    var t = o();
    for (var r in t) ("object" == typeof exports ? exports : e)[r] = t[r];
  }
})(self, () =>
  (() => {
    "use strict";
    var e = {
        75: (e, o, t) => {
          var r = t(113),
            n = r.add,
            u =
              (r.subtract,
              r.multiply,
              function (e) {
                console.log(n(1, 2)), console.log("Hello, ".concat(e, "!"));
              });
          u("World"), (e.exports = { greet: u });
        },
        113: (e) => {
          e.exports = {
            add: function (e, o) {
              console.log("add", e, o);
              for (var t = 0; t < 10; t++) console.log(t);
              return e + o;
            },
            subtract: function (e, o) {
              return e - o;
            },
            multiply: function (e, o) {
              return e * o;
            },
            divide: function (e, o) {
              return e / o;
            },
          };
        },
      },
      o = {};
    return (function t(r) {
      var n = o[r];
      if (void 0 !== n) return n.exports;
      var u = (o[r] = { exports: {} });
      return e[r](u, u.exports, t), u.exports;
    })(75);
  })()
);
