// These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.
module.exports = {
    'rules': {
        // enforce `return` after a callback
        'callback-return': [2, ['callback', 'cb', 'next', 'done']],
        // enforce `require()` on top-level module scope
        'global-require': 0,
        // enforce error handling in callbacks
        'handle-callback-err': [2, '^(err|error)$' ],
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': 0,
        // disallow use of `new` operator with the `require` function
        'no-new-require': 0,
        // disallow string concatenation with `__dirname` and `__filename`
        'no-path-concat': 2,
        // disallow use of `process.env`
        'no-process-env': 0,
        // disallow `process.exit()`
        'no-process-exit': 0,
        // restrict usage of specified node modules
        'no-restricted-modules': 0,
        // disallow use of synchronous methods
        'no-sync': 0,
        // disallow certain object properties
        'no-restricted-properties': 0,
    },
};
