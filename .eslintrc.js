module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'import', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
    'import/ignore': ['react-native'],
    react: {
      version: 'detect',
    },
  },
  parser: '@babel/eslint-parser',
  rules: {
    'linebreak-style': 0,
    'no-prototype-builtins': 'off',
    'import/no-unresolved': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-escape': 'off',
  },
};
