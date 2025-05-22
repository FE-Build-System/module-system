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
    // library: {
    //   type: "module",
    // },
  },
  optimization: {
    minimize: false,
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: "commonjs", // false, commonjs
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
