(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t,
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    "/Users/rafael/webs/module-system/chapter2/cjs/practices/3_browserify/src/app.js":
      [
        function (require, module, exports) {
          const { add } = require("./math");

          console.log("3 + 4 =", add(3, 4));
        },
        {
          "./math":
            "/Users/rafael/webs/module-system/chapter2/cjs/practices/3_browserify/src/math.js",
        },
      ],
    "/Users/rafael/webs/module-system/chapter2/cjs/practices/3_browserify/src/math.js":
      [
        function (require, module, exports) {
          function add(a, b) {
            return a + b;
          }

          module.exports = { add };
        },
        {},
      ],
  },
  {},
  [
    "/Users/rafael/webs/module-system/chapter2/cjs/practices/3_browserify/src/app.js",
  ],
);
