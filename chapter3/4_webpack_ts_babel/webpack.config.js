const path = require("path");

module.exports = {
  mode: "production",
  // entry: {
  //   esm: "./src/esm_index.mjs",
  //   cjs: "./src/cjs_index.js",
  // },
  entry: "./src/cjs_index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.mjs",
    module: true,
    library: {
      // name: "MyLib",
      type: "module", // webpack4: libraryTarget
      export: "default",
    },
  },
  experiments: {
    outputModule: true, // ESM 래퍼 허용
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/, // .js 확장자를 가진 파일에 대해
      //   exclude: /node_modules/, // node_modules 폴더는 제외
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         [
      //           "@babel/preset-env",
      //           {
      //             modules: "commonjs", // ESM → CJS 변환
      //           },
      //         ],
      //       ],
      //     },
      //   },
      // },
    ],
  },
};
