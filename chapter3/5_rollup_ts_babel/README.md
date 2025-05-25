# Rollup + TypeScript + Babel

## Rollup 기본

`npm install --save-dev @rollup/plugin-commonjs`

```js
// rollup.config.js
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: {
    esm: "./src/esm_index.mjs",
    cjs: "./src/cjs_index.js",
  },
  output: {
    dir: "dist",
    entryFileNames: "[name]-bundle.js",
    format: "cjs", // amd, cjs, es, umd, iife, system
    // exports: "auto",
    // preserveModules: false,
    // inlineDynamicImports: false,
    // dynamicImportInCjs: true,
  },
  plugins: [
    // commonjs()
  ],
};
```

## interop 옵션 (default, esModule, auto)

```js
// 1. mod-cjs.cjs
module.exports = { foo: 123 };

// 2. mod-esm.cjs (from ESM)
module.exports.__esModule = true;
module.exports.default = 456;
module.exports.bar = "x";
```

### default

1. `import A from 'mod-cjs'` --> `{ foo: 123 }`
2. `import A from 'mod-esm'` --> `{ default: 456, bar: 'x' }`

### esModule

1. `import A from 'mod-cjs'` --> `{ foo: 123 }.default` // undefined
2. `import A from 'mod-esm'` --> `{ default: 456, bar: 'x', __esModule: true }.default`

### auto

1. `import A from 'mod-cjs'` --> `{ foo: 123 }` // default 방식
2. `import A from 'mod-esm'` --> `{ default: 456, bar: 'x' }.default` // esModule 방식

## Rollup + Babel

`npm install --save-dev @rollup/plugin-babel`

```js
// rollup.config.js
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel");

module.exports = {
  input: {
    esm: "./src/esm_index.mjs",
    cjs: "./src/cjs_index.js",
  },
  output: {
    dir: "dist",
    entryFileNames: "[name]-bundle.js",
    format: "es",
  },
  plugins: [
    commonjs(),
    babel({
      babelHelpers: "bundled", // 헬퍼함수 처리 방식
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
          },
        ],
      ],
    }),
  ],
};
```

## Rollup + Babel + TypeScript

### @rollup/plugin-typescript

`npm install --save-dev @rollup/plugin-typescript tslib`

```js
// rollup.config.js
const babel = require("@rollup/plugin-babel");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: {
    ts: "./src/ts_index.ts",
  },
  output: {
    dir: "dist",
    entryFileNames: "[name]-bundle.js",
    format: "cjs",
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
          },
        ],
      ],
    }),
    typescript({
      tsconfig: "./tsconfig.json", // 사용할 tsconfig 경로
    }),
  ],
};
```

### @babel/preset-typescript

`npm install --save-dev @babel/preset-typescript @rollup/plugin-node-resolve`

```js
// rollup.config.js
const babel = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve");

module.exports = {
  input: {
    ts: "./src/ts_index.ts",
  },
  output: {
    dir: "dist",
    entryFileNames: "[name]-bundle.js",
    format: "es",
  },
  plugins: [
    resolve({
      extensions: [".js", ".ts"],
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".ts"],
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
          },
        ],
        "@babel/preset-typescript",
      ],
    }),
  ],
};
```
