/******/ var __webpack_modules__ = {
  /***/ 75: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    var _require = __webpack_require__(113),
      add = _require.add,
      subtract = _require.subtract,
      multiply = _require.multiply;
    var greet = function greet(name) {
      console.log(add(1, 2));
      console.log("Hello, ".concat(name, "!"));
    };
    greet("World");
    module.exports = {
      greet: greet,
    };

    /***/
  },

  /***/ 113: /***/ (module) => {
    module.exports = function () {
      console.log("test");
    };
    var add = function add(a, b) {
      return a + b;
    };
    var subtract = function subtract(a, b) {
      return a - b;
    };
    var multiply = function multiply(a, b) {
      return a * b;
    };
    var divide = function divide(a, b) {
      return a / b;
    };
    module.exports = {
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
    };

    /***/
  },

  /******/
};
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
  /******/ // Check if module is in cache
  /******/ var cachedModule = __webpack_module_cache__[moduleId];
  /******/ if (cachedModule !== undefined) {
    /******/ return cachedModule.exports;
    /******/
  }
  /******/ // Create a new module (and put it into the cache)
  /******/ var module = (__webpack_module_cache__[moduleId] = {
    /******/ // no module.id needed
    /******/ // no module.loaded needed
    /******/ exports: {},
    /******/
  });
  /******/
  /******/ // Execute the module function
  /******/ __webpack_modules__[moduleId](
    module,
    module.exports,
    __webpack_require__
  );
  /******/
  /******/ // Return the exports of the module
  /******/ return module.exports;
  /******/
}
/******/
/************************************************************************/
/******/
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__(75);
/******/
