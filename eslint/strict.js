// These rules relate to using strict mode and strict mode directives.
module.exports = {
    'rules': {
        // require effective use of strict mode directives
        'strict': [2, 'safe'],
    },
    'parserOptions': {
        'ecmaFeatures': {
            'impliedStrict': true,   // because require node >= 4.5.0
        }
    },
};
