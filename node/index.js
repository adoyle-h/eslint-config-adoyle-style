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
        node: true,
    },
    parserOptions: {
        ecmaVersion: 5,
    },
    globals: {},
    rules: {},
};
