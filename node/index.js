module.exports = {
    extends: [
        'best_practices',
        'commonjs',
        'possible_errors',
        'strict',
        'stylistic_issues',
        'variables',
        'es6',
    ].map((path) => {
        return require.resolve(`../eslint_rules/${path}`);
    }),
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 6,
    },
    globals: {},
    rules: {},
};
