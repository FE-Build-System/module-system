export default {
  input: {
    esm: "./src/esm_index.mjs",
    cjs: "./src/cjs_index.js",
  },
  output: {
    dir: "dist",
    entryFileNames: "[name]-bundle.js",
    format: "es", // amd, cjs, es, umd, iife, system
    // exports: "auto",
    // preserveModules: false,
    // inlineDynamicImports: false,
    // dynamicImportInCjs: true,
  },
  plugins: [
    // "@rollup/plugin-commonjs"
  ],
};
