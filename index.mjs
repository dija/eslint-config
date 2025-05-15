import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { existsSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';
import tseslint from 'typescript-eslint';

const dir = cwd();

let tsConfig = join(dir, 'tsconfig.json');
const tsEslintConfig = join(dir, 'tsconfig.eslint.json');

if (existsSync(tsEslintConfig)) {
    tsConfig = tsEslintConfig;
}

export default tseslint.config([
    // 1. Global ignores
    {
        ignores: [
            '**/node_modules/',
            '**/dist/',
            '**/build/',
            '**/.DS_Store',
            '**/*.min.js',
            '**/coverage/',
            '**/.turbo/',
            '**/.eslintcache',
            '**/.vercel/',
            '**/.nuxt/',
            '**/.svelte-kit/',
            '**/package-lock.json',
            '**/pnpm-lock.yaml',
            '**/yarn.lock',
        ],
    },

    // 2. Base ESLint recommended rules
    eslint.configs.recommended,

    // 3. TypeScript configurations
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: tsConfig,
                ecmaFeatures: { jsx: true },
            },
        },
    },

    // 4. Rules
    {
        rules: {
            'global-require': 'off',
            'no-console': 'off',
            'no-empty': 'off',
            'no-redeclare': 'off',
            'no-multiple-empty-lines': 'off',
            'no-trailing-spaces': 'off',
            'arrow-body-style': 'off',
            'object-curly-newline': 'off',
            'operator-linebreak': 'off',
            'prefer-destructuring': 'off',
            'no-shadow': 'off',
            'class-methods-use-this': 'off',
            'implicit-arrow-linebreak': 'off',
            'symbol-description': 'off',
            'object-shorthand': 'off',
            'import/no-cycle': 'off',
            'no-param-reassign': 'off',
            'no-nested-ternary': 'off',
            'no-confusing-arrow': 'off',
            'default-case': 'off',
            'max-classes-per-file': 'off',
            'no-restricted-globals': 'off',
            'no-plusplus': 'off',
            'no-restricted-syntax': ['warn', 'LabeledStatement', 'WithStatement'],
            'no-debugger': 'off',
            'no-alert': 'off',
            'no-self-assign': 'off',
            'no-extra-boolean-cast': 'off',
            'no-await-in-loop': 'off',
            'no-return-assign': ['error', 'except-parens'],
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
            quotes: 'off',
            'import/no-extraneous-dependencies': 0,
            'no-use-before-define': 0,
            'vars-on-top': 0,
            'prefer-object-spread': 0,

            /**
             * Typescript
             */
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/comma-dangle': 'off',
            '@typescript-eslint/semi': 'off',
            '@typescript-eslint/indent': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/unbound-method': 'off',
            '@typescript-eslint/require-await': 'off',
            '@typescript-eslint/lines-between-class-members': 'off',
            '@typescript-eslint/restrict-plus-operands': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/quotes': 'off',
            '@typescript-eslint/no-unnecessary-type-assertion': 'off',
            '@typescript-eslint/no-redundant-type-constituents': 'off',
            '@typescript-eslint/no-duplicate-type-constituents': 'off',
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
        },
    },

    // 5. Prettier integration
    eslintPluginPrettierRecommended,
    {
        rules: {
            'prettier/prettier': [
                'warn',
                {
                    printWidth: 120,
                    tabWidth: 4,
                    semi: true,
                    singleQuote: true,
                    trailingComma: 'all',
                    endOfLine: 'auto',
                },
            ],
        },
    },
]);
