// No dependencies case
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS (Node)
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    // ex: <script src="module.js">
    root.returnExports = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  // Return module
  return {};
});
