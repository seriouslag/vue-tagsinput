module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        'before': false,
      },
    ],
    'no-trailing-spaces': 2,
    'space-before-function-paren': [2, 'always'],
    'spaced-comment': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'always'],
    'complexity': [1, 10],
    'eqeqeq': ['error', 'always'],
    'no-var': 2,
    'no-unused-vars': 0,
    'prefer-spread': 2,
    'prefer-template': 2,
    'prefer-rest-params': 2,
    'prefer-arrow-callback': 2,
    'no-duplicate-imports': 2,
    'no-const-assign': 2,
    'no-tabs': 2,
    'no-multiple-empty-lines': 2,
    'eol-last': ['error', 'always'],
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    impliedStrict: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
};
