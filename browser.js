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
        return require.resolve('./rules/' + path);
    }),
    env: {
        browser: true,
        node: false,
    },
    ecmaFeatures: {},
    globals: {},
    rules: {
        'no-alert': 2,
        'no-script-url': 2,
    },
};
