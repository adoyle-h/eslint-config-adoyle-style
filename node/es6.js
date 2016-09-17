module.exports = {
    extends: [
        'es6',
    ].map(function(path) {
        return require.resolve('../eslint/' + path);
    }),
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
    },
};
