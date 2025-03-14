const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      noConsole: 'off',
      eqeqeq: ['error', 'always'],
      curly: 'error',
    },
  },
]);
