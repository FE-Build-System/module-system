var o = {
    205: (o, r, t) => {
      const { add: e, subtract: l, multiply: s } = t(595),
        d = (o) => {
          console.log(e(1, 2)), console.log(`Hello, ${o}!`);
        };
      d("World"), (o.exports = { greet: d });
    },
    595: (o) => {
      o.exports = {
        add: (o, r) => {
          console.log("add", o, r);
          for (let o = 0; o < 10; o++) console.log(o);
          return o + r;
        },
        subtract: (o, r) => o - r,
        multiply: (o, r) => o * r,
        divide: (o, r) => o / r,
      };
    },
  },
  r = {};
!(function t(e) {
  var l = r[e];
  if (void 0 !== l) return l.exports;
  var s = (r[e] = { exports: {} });
  return o[e](s, s.exports, t), s.exports;
})(205);
