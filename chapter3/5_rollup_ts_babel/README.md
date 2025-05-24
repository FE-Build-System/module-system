# Rollup + TypeScript + Babel

## Rollup 기본

```js
// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default {
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
    // "@rollup/plugin-commonjs"
  ],
};
```

## Rollup + Babel

`npm install --save-dev babel-loader @babel/core @babel/preset-env`

```js
// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default {
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
    // "@rollup/plugin-commonjs"
  ],
};
```

## Rollup + Babel + TypeScript

```js
// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default {
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
    // "@rollup/plugin-commonjs"
  ],
};
```
