module.exports = {
  root: true,

  env: {
    node: true,
    es2022: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  extends: [
    'eslint:recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
  ],

  plugins: ['prettier'],

  rules: {
    // style
    'prettier/prettier': 'error',

    // backend pragmatique
    'consistent-return': 'off',
    'no-return-await': 'off',
    'handle-callback-err': 'warn',

    // utile avec Express
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // ESM friendly
    'no-undef': 'off',

    // debug
    'no-console': 'off',
  },
};