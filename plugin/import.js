'use strict';

const util = require('../lib/util');
util.checkPlugin('eslint-plugin-import');

module.exports = {
    plugins: [
        'import',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json'],
            },
        },
        'import/extensions': [
            '.js',
            '.jsx',
        ],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
        ],
    },
    rules: {
        'import/no-unresolved': 2,
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        'import/no-named-as-default': 1,
        'import/no-named-as-default-member': 1,
        'import/no-deprecated': 0,
        'import/no-extraneous-dependencies': [2, {
            devDependencies: false,
            optionalDependencies: false,
            peerDependencies: false,
        }],
        'import/no-mutable-exports': 2,
        'import/no-commonjs': 0,
        'import/no-amd': 2,
        'import/no-nodejs-modules': 0,
        'import/imports-first': [2, 'absolute-first'],
        'import/no-duplicates': 2,
        'import/no-namespace': 0,
        'import/extensions': [0, 'never'],
        'import/order': [0, {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
        }],
        'import/newline-after-import': 2,
        'import/prefer-default-export': 2,
        'import/no-restricted-paths': 0,
        'import/no-absolute-path': 2,
    },
};
