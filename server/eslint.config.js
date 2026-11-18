import js from '@eslint/js';
import globals from 'globals';
import security from 'eslint-plugin-security';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.vscode/**',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      security,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...security.configs.recommended.rules,
      'prettier/prettier': 'error',

      // Backend
      'consistent-return': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'off',
      'no-console': 'off',
    },
  },
];
