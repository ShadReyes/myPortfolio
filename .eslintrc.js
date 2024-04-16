/* eslint-disable prettier/prettier */
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:eslint-plugin-next-on-pages/recommended', 'eslint-config-prettier'],
  plugins: ['eslint-plugin-next-on-pages', '@typescript-eslint', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-shadow': ['warn'],
        '@typescript/ban-types': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'warn',
        'object-curly-spacing': 0,
        'react-native/no-inline-styles': 0,
        'react-hooks/exhaustive-deps': 0,
        'jsx-quotes': ['warn', 'prefer-single'],
        'eqeqeq': 'off',
        'react/jsx-boolean-value': 'off',
        'react/no-escaped-entities': 'off',
      },
    },
  ],
};
