import { Linter } from 'eslint';

const config: Linter.Config = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'error',
  },
};

export default config;
