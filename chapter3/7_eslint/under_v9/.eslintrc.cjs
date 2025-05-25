module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    // sourceType: "module", // script, module
    ecmaVersion: "latest",
  },
  // overrides: [
  //   {
  //     files: ["*.cjs"],
  //     parserOptions: { sourceType: "script" },
  //     env: { node: true },
  //   },
  //   {
  //     files: ["./amd/**/*.js"],
  //     parserOptions: { sourceType: "script" },
  //     env: { amd: true },
  //   },
  //   {
  //     files: ["*.mjs"],
  //     parserOptions: { sourceType: "module" },
  //     env: { browser: true },
  //   },
  // ],
};
