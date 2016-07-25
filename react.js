'use strict';
module.exports = {
    extends: [
        'react',
        'react-a11y',
        'import',
    ].map(function(path) {
        return require.resolve('./rules/' + path);
    }),
};
