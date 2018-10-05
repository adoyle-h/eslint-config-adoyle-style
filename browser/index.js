'use strict';

module.exports = {
    extends: [
        'best_practices',
        'commonjs',
        'possible_errors',
        'strict',
        'stylistic_issues',
        'variables',
    ].map((path) => {
        return require.resolve(`../eslint_rules/${path}`);
    }),
    env: {
        browser: true,
        node: false,
    },
    parserOptions: {
        ecmaVersion: '2018',
        sourceType: 'module',
    },
    globals: {},
    rules: {
        'no-alert': 2,
        'no-script-url': 2,
    },
};
