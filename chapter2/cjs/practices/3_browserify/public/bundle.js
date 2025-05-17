(function () {
  function browserifyRequire(modules, cache, entryModules) {
    function localRequire(moduleId, jumped) {
      if (!cache[moduleId]) {
        if (!modules[moduleId]) {
          var nodeRequire = typeof require === 'function' && require;
          if (!jumped && nodeRequire) return nodeRequire(moduleId, true);
          if (previousRequire) return previousRequire(moduleId, true);

          var err = new Error("Cannot find module '" + moduleId + "'");
          err.code = "MODULE_NOT_FOUND";
          throw err;
        }

        // 모듈 객체 생성 및 exports 초기화
        var module = (cache[moduleId] = {
          exports: {},
        });

        // 모듈 실행
        modules[moduleId][0].call(
          module.exports,
          function requireInModule(requestPath) {
            const mappedId = modules[moduleId][1][requestPath];
            return localRequire(mappedId || requestPath);
          },
          module,
          module.exports,
          browserifyRequire,
          modules,
          cache,
          entryModules,
        );
      }

      return cache[moduleId].exports;
    }

    // Node.js 환경에서 이전 require 캐시 유지용
    var previousRequire =
      typeof require === 'function' && require;

    // entryModules 배열의 각 엔트리 모듈 실행
    for (var i = 0; i < entryModules.length; i++) {
      localRequire(entryModules[i]);
    }

    return localRequire;
  }

  return browserifyRequire;
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
