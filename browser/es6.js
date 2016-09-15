module.exports = {
    extends: [
        'es6',
    ].map(function(path) {
        return require.resolve('../common_rules/' + path);
    }),
    env: {
        es6: true,
    },
};
