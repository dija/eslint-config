# @dija/eslint-config

## Install:

Install as a dev dependency:

```bash
npm i @dija/eslint-config --save-dev
```

## Config

Add a `eslint.config.mjs` file.

```js
import configs from '@dija/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(configs);
```

## Typescript

(Optional) Add a `tsconfig.eslint.json` file and include your files.

```json
{
  "include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs"]
}
```
