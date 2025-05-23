import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/esm_index.mjs",
  // input: "src/cjs_index.js",
  output: {
    dir: "dist",
    entryFileNames: "[name]_bundle.js",
    format: "es",
  },
  plugins: [
    // 1) node_modules 패키지 해석
    // resolve({
    //   extensions: [".js", ".cjs"], // .cjs 파일도 해석
    //   browser: true, // 브라우저용 진입점을 우선
    // }),
    // 2) CJS → ESM 변환
    // commonjs({
    //   extensions: [".js", ".cjs"], // 처리할 확장자
    //   transformMixedEsModules: true, // ES+CommonJS 혼합 파일도 변환
    //   requireReturnsDefault: "auto", // default 내보내기 자동 감지
    // }),
    // babel({
    //   babelHelpers: "bundled", // 헬퍼함수 처리 방식
    //   exclude: "node_modules/**",
    //   presets: [
    //     [
    //       "@babel/preset-env",
    //       {
    //         modules: "auto",
    //       },
    //     ],
    //   ],
    // }),
  ],
};
