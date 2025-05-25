module.exports = {
  "root": true,
  "env": {
      "browser": true,
      "es2021": true,
      "node": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "script",
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  // overrides: [
  //   {
  //     files: ['*.cjs'],
  //     parserOptions: { sourceType: 'script' },
  //     env: { node: true },
  //   },
  //   {
  //     files: ['./amd/**/*.js'],
  //     parserOptions: { sourceType: 'script' },
  //     env: { amd: true },
  //   },
  //   {
  //     files: ['*.mjs'],
  //     parserOptions: { sourceType: 'module' },
  //     env: { browser: true },
  //   },
  // ]
}