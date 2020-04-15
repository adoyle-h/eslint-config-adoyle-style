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
        'import/no-duplicates': 2,
        'import/no-namespace': 0,
        'import/extensions': [0, 'never'],
        'import/order': [0, {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
        }],
        'import/newline-after-import': 2,
        'import/prefer-default-export': 0,
        'import/no-restricted-paths': 0,
        'import/no-absolute-path': 2,
        'import/dynamic-import-chunkname': 0,
        'import/exports-last': 0,
        'import/first': 2,
        'import/group-exports': 0,
        'import/max-dependencies': 0,
        'import/no-anonymous-default-export': 0,
        'import/no-cycle': [2, {maxDepth: 30}],
        'import/no-default-export': 0,
        'import/no-named-export': 0,
        'import/no-named-default': 0,
        'import/no-dynamic-require': 0,
        'import/no-internal-modules': 0,
        'import/no-relative-parent-imports': 0,
        'import/no-self-import': 2,
        'import/no-unassigned-import': 0,
        'import/no-unused-modules': 0,
        'import/no-useless-path-segments': 2,
        'import/no-webpack-loader-syntax': 0,
        'import/unambiguous': 2,
    },
};
