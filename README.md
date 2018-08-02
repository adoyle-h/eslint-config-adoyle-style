# eslint-config-adoyle-style
![Node Version][Node Version Image]
[![Npm Package Version][Npm Package Version Image]][Npm Package Version LINK]
[![License][License Image]][License LINK]
![NodeJS Package Dependencies][NodeJS Package Dependencies Link]

A set of eslint shareable configurations for javascript code style, which follows ADoyle's code style.

The configurations for browser and server development. It supports ES6, and React/JSX.

<!-- MarkdownTOC GFM -->

- [Feature](#feature)
- [Installation](#installation)
- [Usage](#usage)
    - [For NodeJS](#for-nodejs)
    - [For Browser](#for-browser)
    - [Additional Plugins](#additional-plugins)
    - [For Test](#for-test)
- [Versioning](#versioning)
- [Copyright and License](#copyright-and-license)

<!-- /MarkdownTOC -->

## Feature

- Code style with my best practice
- Configurations for different environments
- Optional eslint-plugin configurations
- Semver-checking with eslint-plugin configuration

## Installation

```bash
npm install -DE eslint-config-adoyle-style
npm install -D eslint@5
```

**ATTENTION**: Use `npm install -E` to save eslint-config-adoyle-style with exact version.

You should install `eslint` and other dependencies by yourself.

## Usage

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

Edit your `.eslintrc` file. Apply different code styles as below:

### For NodeJS

**It's default for ES6 syntax and ES6 global variables:**

```js
{
  "extends": "adoyle-style/node"
}
```

### For Browser

**It's default for ES5 syntax:**

```js
{
  "extends": "adoyle-style/browser"
}
```

additional ES6 syntax:

```js
{
  "extends": [
    "adoyle-style/browser",
    "adoyle-style/browser/es6",
  ],
}
```

### Additional Plugins

additional React/JSX support:

```js
{
  "extends": [
    "adoyle-style/browser",
    "adoyle-style/browser/es6",
    "adoyle-style/plugin/import",
    "adoyle-style/plugin/react-a11y",
    "adoyle-style/plugin/react",
  ],
}
```

additional import support:

```js
{
  "extends": [
    "adoyle-style/node",
    "adoyle-style/plugin/import",
  ],
}
```

**Attention!**

You should install each devDependency by yourself when using the `adoyle-style/plugin/*`. And each package's version should under the `optionalDependencies`. Such as `eslint-plugin-jsx-a11y`, `eslint-plugin-import`, `eslint-plugin-react`.

You should use `babel-eslint` instead of `eslint` as parser for ES6+ syntax.

### For Test

@TODO

## Versioning

The versioning follows the rules of SemVer 2.0.0.

**BUT**, anything may have **BREAKING CHANGES** at **ANY TIME** when major version is zero (0.y.z), which is for initial development and the public API should not be considered stable.

When major version is zero, You should save it with prefix `~`.

For more information on SemVer, please visit http://semver.org/.

## Copyright and License

Copyright (c) 2016-2018 ADoyle. The project is licensed under the **BSD 3-clause License**.

See the [LICENSE][] file for the specific language governing permissions and limitations under the License.

See the [NOTICE][] file distributed with this work for additional information regarding copyright ownership.


<!-- Links -->

[LICENSE]: ./LICENSE
[NOTICE]: ./NOTICE


<!-- links -->

[Node Version Image]: https://img.shields.io/node/v/eslint-config-adoyle-style.svg
[Npm Package Version Image]: https://img.shields.io/npm/v/eslint-config-adoyle-style.svg
[Npm Package Version LINK]: https://www.npmjs.com/package/eslint-config-adoyle-style
[License Image]: https://img.shields.io/npm/l/eslint-config-adoyle-style.svg
[License LINK]: https://github.com/adoyle-h/eslint-config-adoyle-style/blob/master/LICENSE
[NodeJS Package Dependencies Link]: https://david-dm.org/adoyle-h/eslint-config-adoyle-style.svg
