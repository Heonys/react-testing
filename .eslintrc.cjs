module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["plugin:vitest/recommended", "plugin:storybook/recommended"],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier', "vitest"],
  "extends": ["plugin:vitest/recommended"],
  rules: {
    "vitest/no-large-snapshots": "error",
    "vitest/no-identical-title": "off",
    "vitest/expect-expect": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error', {
          'endOfLine': 'auto'
      }
    ],
  },
  "globals": {
    "globalThis": true,
    "describe": true,
    "it": true,
    "test": true,
    "expect": true,
    "beforeEach": true,
    "afterEach": true,
    "beforeAll": true,
    "afterAll": true,
    "vi": true
  }
}
