const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    esm: "./src/esm_index.mjs",
    cjs: "./src/cjs_index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
    library: {
      type: "commonjs", // webpack4: libraryTarget
    },
  },
  optimization: {
    minimize: false,
  },
};
