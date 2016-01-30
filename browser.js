'use strict';
module.exports = {
    extends: [
        'best_practices',
        'commonjs',
        'possible_errors',
        'strict',
        'stylistic_issues',
        'variables',
    ].map(function(path) {
        if (process.cwd() === __dirname) {
            return require.resolve('./rules/' + path);
        } else {
            return require.resolve('eslint-config-adoyle-style/rules/' + path);
        }
    }),
    env: {
        browser: false,
        node: true,
    },
    ecmaFeatures: {},
    globals: {},
    rules: {
        // disallow use of multiline strings
        'no-multi-str': 2,
        // specify tab or space width for your code (fixable)
        'indent': [2, 4, {'SwitchCase': 1, 'VariableDeclarator': { 'var': 1, 'let': 1, 'const': 1}}],
        'no-catch-shadow': 2,
        'no-alert': 1,
        // disallow `var` and named functions in global scope
        'no-implicit-globals': 2
        // disallow use of `javascript:` urls.
        'no-script-url': 2,
    },
};
