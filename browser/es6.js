'use strict';

module.exports = {
    extends: [
        'es6',
    ].map(function(path) {
        return require.resolve('../eslint_rules/' + path);
    }),
    env: {
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
};
