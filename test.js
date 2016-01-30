'use strict';
module.exports = {
    extends: [
    ].map(function(path) {
        if (process.cwd() === __dirname) {
            return require.resolve('./' + path);
        } else {
            return require.resolve('eslint-config-adoyle-style/' + path);
        }
    }),
    env: {
        mocha: true,
    },
    ecmaFeatures: {},
    globals: {},
};
