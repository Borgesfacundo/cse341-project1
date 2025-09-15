const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
      ecmaVersion: 2021,
      sourceType: 'commonjs'
    }
  }
];
