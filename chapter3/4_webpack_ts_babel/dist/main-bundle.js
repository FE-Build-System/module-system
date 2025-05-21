var o = {
    205: (o, t, e) => {
      const { add: r, subtract: l, multiply: s } = e(595),
        n = (o) => {
          console.log(r(1, 2)), console.log(`Hello, ${o}!`);
        };
      n("World"), (o.exports = { greet: n });
    },
    595: (o) => {
      (o.exports = function () {
        console.log("test");
      }),
        (o.exports = {
          add: (o, t) => {
            console.log("add", o, t);
            for (let o = 0; o < 10; o++) console.log(o);
            return o + t;
          },
          subtract: (o, t) => o - t,
          multiply: (o, t) => o * t,
          divide: (o, t) => o / t,
        });
    },
  },
  t = {};
!(function e(r) {
  var l = t[r];
  if (void 0 !== l) return l.exports;
  var s = (t[r] = { exports: {} });
  return o[r](s, s.exports, e), s.exports;
})(205);
