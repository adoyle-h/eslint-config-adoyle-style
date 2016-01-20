# eslint-config-adoyle-style
![Node Version][Node Version Image]
[![Npm Package Version][Npm Package Version Image]][Npm Package Version LINK]
[![License][License Image]][License LINK]
![NodeJS Package Dependencies][NodeJS Package Dependencies Link]

A set of eslint shareable configs for javascript code style, which follows ADoyle's code style.

The configs for browser and server, both es5 and es6.

## Installation

```bash
npm install eslint-config-adoyle-style
```

## Usage

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

Edit your `.eslintrc` file. Apply different code styles as below:

### For NodeJS

**It's default for ES5 syntax:**

```
{
  "extends": "adoyle-style"
}
```

or

```
{
  "extends": "adoyle-style/node_es5"
}
```

additional ES6 syntax:

```
{
  "extends": [
      "adoyle-style",
      "adoyle-style/node_es6"
  ],
}
```

### For Browser

**It's default for ES5 syntax:**

```
{
  "extends": "adoyle-style/browser"
}
```

additional ES6 syntax:

```
{
  "extends": [
      "adoyle-style/browser",
      "adoyle-style/node_es6"
  ],
}
```

### For Test

**It's default for ES5 syntax:**

```
{
  "extends": [
      "adoyle-style",
      "adoyle-style/test"
  ],
}
```

additional ES6 syntax:

```
{
  "extends": [
      "adoyle-style",
      "adoyle-style/test",
      "adoyle-style/node_es6"
  ],
}
```

## Versioning

The versioning follows the rules of SemVer 2.0.0.

**BUT**, anything may have **BREAKING CHANGES** at **ANY TIME** when major version is zero (0.y.z), which is for initial development and the public API should not be considered stable.

For more information on SemVer, please visit http://semver.org/.

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
