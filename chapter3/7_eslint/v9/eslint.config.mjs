import js from '@eslint/js';

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: js.configs.recommended.languageOptions.globals,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: js.configs.recommended.rules,
  },
  {
    files: ['*.mjs'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    env: {
      browser: true,
    },
  },
  {
    files: ['*.cjs'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 'latest',
    },
    env: {
      node: true,
    },
  },
  {
    files: ['./amd/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 'latest',
    },
    env: {
      amd: true,
    },
  },
];