module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    indent: ['error', 2, { 'SwitchCase': 1 }],
    'no-var': ['error'],
    'object-curly-spacing': ['error', 'always'],
    "comma-dangle": ["error", "never"],
    "require-jsdoc" : 0,
    'max-len': ["error", { "code": 120 }]
  },
};
