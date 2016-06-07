'use strict';
module.exports = {
    extends: [
        'es6',
    ].map(function(path) {
        if (process.cwd() === __dirname) {
            return require.resolve('./rules/' + path);
        } else {
            return require.resolve('eslint-config-adoyle-style/rules/' + path);
        }
    }),
    env: {
        node: true,
        es6: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {},
    globals: {},
};
