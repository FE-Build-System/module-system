(() => {
  "use strict";
  var o = {
      22: (o, r) => {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.subtract = r.multiply = r.divide = r.add = void 0),
          (r.add = function (o, r) {
            console.log("add", o, r);
            for (var t = 0; t < 10; t++) console.log(t);
            return o + r;
          }),
          (r.subtract = function (o, r) {
            return o - r;
          }),
          (r.multiply = function (o, r) {
            return o * r;
          }),
          (r.divide = function (o, r) {
            return o / r;
          });
      },
    },
    r = {},
    t = (function t(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var u = (r[e] = { exports: {} });
      return o[e](u, u.exports, t), u.exports;
    })(22);
  console.log((0, t.add)(1, 2)), console.log("Hello, ".concat("World", "!"));
})();
//# sourceMappingURL=bundle.js.map
