const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  infrastructureLogging: { level: "verbose" },
  stats: "verbose",
  module: {
    rules: [
      {
        test: /\.js$/, // .js 확장자를 가진 파일에 대해
        exclude: /node_modules/, // node_modules 폴더는 제외
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: "commonjs", // ESM → CJS 변환
                  debug: true, // 변환 로그 확인
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".cjs"],
  },
  optimization: {
    usedExports: true,
  },
  devtool: "source-map",
};
