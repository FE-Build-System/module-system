# Webpack + TypeScript + Babel

## Webpack 기본

```js
// webpack.config.js
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
```

## Webpack + Babel

`npm install --save-dev babel-loader @babel/core @babel/preset-env`

```js
// webpack.config.js
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
                  modules: "auto", // false, commonjs
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
```

## Webpack + Babel + TypeScript

### ts-loader

`npm install --save-dev ts-loader`

```js
// webpack.config.js
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    ts: "./src/ts_index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
    library: {
      type: "module",
    },
  },
  optimization: {
    minimize: false,
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                  },
                ],
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};

// tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "target": "ESNext",
    "module": "ESNext",
    "declaration": true
  },
  "include": ["src/**/*"]
}
```

### @babel/preset-typescript

`npm install --save-dev @babel/preset-typescript`

```js
// webpack.config.js
module.exports = {
  // ...
  rules: [
    {
      test: /\.(js|mjs|ts)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      ],
    },
  ],
  // ...
};
```
