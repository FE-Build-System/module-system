import { multiply } from "./math.js";

export default {
  square: function (a) {
    return multiply(a, a);
  },
  cube: function (a) {
    return multiply(a, multiply(a, a));
  },
};
