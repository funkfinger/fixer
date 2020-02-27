module.exports = {
  plugins: ['jsx-a11y', , 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'max-len': ['error', { code: 100 }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'react/prop-types': ['warn'],
  },
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    __PATH_PREFIX__: true,
    render: 'readonly',
    waitForElement: 'readonly',
    fireEvent: 'readonly',
    waitForDomChange: 'readonly',
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
};
