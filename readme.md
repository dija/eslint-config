##### Install:

Install as a dev dependency:
```
npm i @dijateam/eslint-config-taj --save-dev
```

Or install all peer dependencies:
```
npx install-peerdeps --dev @dijateam/eslint-config-taj
```

Then add to `.eslintrc.js`
```
module.exports = {
  extends: '@dijateam/eslint-config-taj',
};
```

----

##### Common issues:

`The file does not match your project config: .eslintrc.js.`

Add this to `.eslintrc.js`
```
module.exports = {
  ignorePatterns: ['.eslintrc.js'],
};
```

----

##### Publish:

NPM:
```
npm publish --access public
```