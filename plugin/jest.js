'use strict';

const util = require('../lib/util');
util.checkPlugin('eslint-plugin-jest');

module.exports = {
    overrides: [
        {
            files: [
                '**/*.test.js',
                '**/__mocks__/*.js',
            ],
            plugins: ['jest'],
            env: {
                jest: true,
            },
        },
    ],
};
