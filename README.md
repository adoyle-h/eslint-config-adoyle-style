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
- [Develop](#develop)
    - [Show differences](#show-differences)
    - [Query Rule](#query-rule)
- [Versioning](#versioning)
- [Copyright and License](#copyright-and-license)

<!-- /MarkdownTOC -->

## Feature

- Code style with my best practice
- Configurations for different environments
- Optional eslint-plugin configurations
- Semver-checking with eslint-plugin configuration

## Installation

```sh
npm install -DE eslint-config-adoyle-style
npm install -D eslint@6

# Only for browser
npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

# If your project use babel
npm install -D eslint-plugin-babel babel-eslint

# If your project use jest
npm install -D eslint-plugin-jest
```

**ATTENTION**: Use `npm install -E` to save eslint-config-adoyle-style with exact version.

## Usage

Edit your `.eslintrc` file. Apply different code styles as below:

### For NodeJS

**It's default for ES6 syntax and ES6 global variables:**

```json
{
  "root": true,
  "extends": ["adoyle-style/node"]
}
```

or

```json
{
  "root": true,
  "extends": ["adoyle-style/node/recommended"]
}
```

"adoyle-style/node/recommended" includes much appropriate plugins. But the eslint-plugins still need to be installed by yourself.

### For Browser

**It's default for ES5 syntax:**

```json
{
  "root": true,
  "extends": ["adoyle-style/browser"]
}
```

additional ES6 syntax:

```json
{
  "root": true,
  "extends": [
    "adoyle-style/browser",
    "adoyle-style/browser/es6"
  ]
}
```

### Additional Plugins

Additional React/JSX support:

```json
{
  "root": true,
  "extends": [
    "adoyle-style/browser",
    "adoyle-style/browser/es6",
    "adoyle-style/plugin/import",
    "adoyle-style/plugin/jsx-a11y",
    "adoyle-style/plugin/react"
  ]
}
```

Additional Jest support:

```json
{
  "root": true,
  "extends": [
    "adoyle-style/node",
    "adoyle-style/plugin/jest"
  ]
}
```

Additional Babel support:

```json
{
  "root": true,
  "extends": [
    "adoyle-style/node",
    "adoyle-style/plugin/babel"
  ]
}
```

Additional import support:

```json
{
  "root": true,
  "extends": [
    "adoyle-style/node",
    "adoyle-style/plugin/import"
  ]
}
```

**Attention!**

You should install each devDependency by yourself when using the `adoyle-style/plugin/*`. And each package's version should under the `optionalDependencies`. Such as `eslint-plugin-jsx-a11y`, `eslint-plugin-import`, `eslint-plugin-react`.

### For Test

@TODO

## Develop

### Show differences

```sh
# install node modules
npm i
# update eslint related deps to latest
./tools/update_eslint_deps
# To show all differences between latest and current rules.
./tools/what_news
```

Then edit rules by yourself.

### Query Rule

```sh
# To query rule description
./tools/find_rule $rule_name

# For example
./tools/find_rule default-param-last
#{
#    "type": "suggestion",
#    "docs": {
#        "description": "enforce default parameters to be last",
#        "category": "Best Practices",
#        "recommended": false,
#        "url": "https://eslint.org/docs/rules/default-param-last"
#    },
#    "messages": {
#        "shouldBeLast": "Default parameters should be last."
#    }
#}

./tools/find_rule import/imports-first
# {
#     "type": "suggestion",
#     "docs": {
#         "url": "https://github.com/benmosher/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md"
#     },
#     "fixable": "code",
#     "deprecated": true
# }
```

## Versioning

The versioning follows the rules of SemVer 2.0.0.

For more information on SemVer, please visit http://semver.org/.

## Copyright and License

Copyright (c) 2016-2020 ADoyle. The project is licensed under the **BSD 3-clause License**.

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
