# @dija/eslint-config

## Install:

Install as a dev dependency:

```bash
npm i @dija/eslint-config --save-dev
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

Add a `tsconfig.eslint.json` file and include your files.

```json
{
  "include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs"]
}
```
