# eslint-config-adoyle-style
![Node Version][Node Version Image]
[![Npm Package Version][Npm Package Version Image]][Npm Package Version LINK]
[![License][License Image]][License LINK]
![NodeJS Package Dependencies][NodeJS Package Dependencies Link]

A set of eslint shareable configs for javascript code style, which follows ADoyle's code style.

The configs for browser and server. It supports ES5, ES6, and React/JSX.

<!-- MarkdownTOC -->

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

<a name="feature"></a>
## Feature

- Code style with my best practice
- Configurations for different environments
- Optional eslint-plugin configurations
- Semver-checking with eslint-plugin configuration

<a name="installation"></a>
## Installation

```bash
npm install -D eslint-config-adoyle-style
```

It is just an eslint config. You should install `eslint` by yourself.

<a name="usage"></a>
## Usage

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

Edit your `.eslintrc` file. Apply different code styles as below:

<a name="for-nodejs"></a>
### For NodeJS

**It's default for ES5 syntax:**

```js
{
  "extends": "adoyle-style/node"
}
```

additional ES6 syntax:

```js
{
  "extends": [
    "adoyle-style/node",
    "adoyle-style/node/es6"
  ],
}
```

<a name="for-browser"></a>
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

<a name="additional-plugins"></a>
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
    "adoyle-style/node/es6",
    "adoyle-style/plugin/import",
  ],
}
```

**Attention!**

You should install each devDependency by yourself when using the `adoyle-style/plugin/*`. And each package's version should under the `optionalDependencies`. Such as `eslint-plugin-jsx-a11y`, `eslint-plugin-import`, `eslint-plugin-react`.

You should use `babel-eslint` instead of `eslint` as parser for ES6+ syntax.

<a name="for-test"></a>
### For Test

@TODO

<a name="versioning"></a>
## Versioning

The versioning follows the rules of SemVer 2.0.0.

**BUT**, anything may have **BREAKING CHANGES** at **ANY TIME** when major version is zero (0.y.z), which is for initial development and the public API should not be considered stable.

When major version is zero, You should save it with prefix `~`.

For more information on SemVer, please visit http://semver.org/.

<a name="copyright-and-license"></a>
## Copyright and License

Copyright (c) 2016 ADoyle. The project is licensed under the **BSD 3-clause License**.

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
