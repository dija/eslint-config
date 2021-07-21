module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'no-redeclare': 'off',
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    //
    'no-debugger': 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      0,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'import/prefer-default-export': 'off',
    import: 'off',
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    radix: 'off',
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'no-use-before-define': 0,
    'vars-on-top': 0,
    'prefer-object-spread': 0,
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 80,
        endOfLine: 'auto',
        semi: true,
        parser: 'typescript',
      },
    ],
  },
};
