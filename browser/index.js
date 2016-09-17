module.exports = {
    extends: [
        'best_practices',
        'commonjs',
        'possible_errors',
        'strict',
        'stylistic_issues',
        'variables',
    ].map(function(path) {
        return require.resolve('../eslint/' + path);
    }),
    env: {
        browser: true,
        node: false,
    },
    parserOptions: {
        ecmaVersion: 5,
    },
    globals: {},
    rules: {
        'no-alert': 2,
        'no-script-url': 2,
    },
};
