module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prefer-const": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "max-len": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-restricted-syntax": 0,
    "class-methods-use-this": 0,
    "object-curly-newline": 0,
  },
};
