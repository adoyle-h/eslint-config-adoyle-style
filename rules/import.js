'use strict';
module.exports = {
    plugins: [
        'import',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json'],
            },
        },
    },
    rules: {
        'import/no-unresolved': 2,
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        'import/no-named-as-default': 1,
        'import/no-named-as-default-member': 1,
        'import/no-duplicates': 1,
    },
};
