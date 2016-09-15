module.exports = {
    extends: [
        'es6',
    ].map(function(path) {
        return require.resolve('../common_rules/' + path);
    }),
    env: {
        node: true,
        es6: true,
    },
};
