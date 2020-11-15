'use strict';

const eslintExtends = [
    'best_practices',
    'commonjs',
    'possible_errors',
    'strict',
    'stylistic_issues',
    'variables',
    'es6',
].map((path) => {
    return require.resolve(`../eslint_rules/${path}`);
});

eslintExtends.push('plugin:require-path-exists/recommended');

module.exports = {
    extends: eslintExtends,
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: '2020',
        sourceType: 'script',
    },
    globals: {},
    plugins: [
        'require-path-exists',
    ],
    rules: {
        'no-shadow': [1, {
            'builtinGlobals': true,
            'hoist': 'all',
            'allow': ['Promise', 'callback', '_'],
        }],
    },
};
