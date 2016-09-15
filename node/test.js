module.exports = {
    extends: [
    ].map(function(path) {
        return require.resolve('../common_rules/' + path);
    }),
    env: {
        mocha: true,
    },
    ecmaFeatures: {},
    globals: {},
};
