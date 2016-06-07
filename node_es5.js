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
        node: true,
    },
    ecmaVersion: 5,
    sourceType: 'module',
    ecmaFeatures: {},
    globals: {},
};
