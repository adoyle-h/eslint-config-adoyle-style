'use strict';
module.exports = {
    extends: [
        'es6',
    ].map(function(path) {
        return require.resolve('./rules/' + path);
    }),
    env: {
        es6: true,
    },
};
