// These rules relate to using strict mode and strict mode directives.
module.exports = {
    'rules': {
        // require effective use of strict mode directives
        // see http://adoyle.me/blog/implicit-strict-mode.html
        'strict': [2, 'never'],
    },
    'parserOptions': {
        'ecmaFeatures': {
            'impliedStrict': true,   // because require node >= 4.5.0
        }
    },
};
