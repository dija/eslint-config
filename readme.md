# @dija/eslint-config

## Install:

Install as a dev dependency:

```bash
npm i @dija/eslint-config --save-dev
```

Or install all peer dependencies:

```bash
npx install-peerdeps --dev @dija/eslint-config
```

## Config

Add a `.eslintrc` file.

```json
{
  "extends": "@dija/eslint-config"
}
```

## Typescript

Add a `.eslintrc` file.

```json
{
  "extends": "@dija/eslint-config",
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  }
}
```

Add a `tsconfig.eslint.json` file.

```json
{
  "include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs"]
}
```
