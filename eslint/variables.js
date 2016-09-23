// These rules have to do with variable declarations.
module.exports = {
    'rules': {
        // enforce or disallow variable initializations at definition
        'init-declarations': 0,
        // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': 0,
        // disallow deletion of variables (recommended)
        'no-delete-var': 2,
        // disallow labels that share a name with a variable
        'no-label-var': 2,
        // restrict usage of specified global variables
        'no-restricted-globals': 0,
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': [1, {
            'builtinGlobals': true,
            'hoist': 'all',
            'allow': ['Promise', 'callback', '_'],
        }],
        // disallow shadowing of names such as `arguments`
        'no-shadow-restricted-names': 2,
        // disallow use of undeclared variables unless mentioned in a `/*global */` block (recommended)
        'no-undef': 2,
        // disallow use of undefined when initializing variables
        'no-undef-init': 2,
        // disallow use of `undefined` variable
        'no-undefined': 0,
        // disallow declaration of variables that are not used in the code (recommended)
        'no-unused-vars': [2, {
            'vars': 'local',
            'args': 'all',
            'argsIgnorePattern': '_',
            'caughtErrors': 'all',
            'caughtErrorsIgnorePattern': '^ignore',
        }],
        // disallow use of variables before they are defined
        'no-use-before-define': [2, {
            'functions': true,
            'classes': true
        }],
    },
};
