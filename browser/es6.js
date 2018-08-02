module.exports = {
    extends: [
        'es6',
    ].map(function(path) {
        return require.resolve('../eslint/' + path);
    }),
    env: {
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
};
