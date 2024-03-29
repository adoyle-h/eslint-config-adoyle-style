'use strict';

// The following rules point out areas where you might have made mistakes.
module.exports = {
    rules: {
        'getter-return': 2,
        'no-compare-neg-zero': 2,
        'for-direction': 2,
        // disallow await inside of loops
        'no-await-in-loop': 2,
        // disallow assignment in conditional expressions (recommended)
        'no-cond-assign': [2, 'always'],
        // disallow use of console in the node environment (recommended)
        'no-console': 2,
        // disallow use of constant expressions in conditions (recommended)
        'no-constant-condition': 2,
        // disallow control characters in regular expressions (recommended)
        'no-control-regex': 2,
        // disallow use of debugger (recommended)
        'no-debugger': 2,
        // disallow duplicate arguments in functions (recommended)
        'no-dupe-args': 2,
        // disallow duplicate keys when creating object literals (recommended)
        'no-dupe-keys': 2,
        // disallow a duplicate case label. (recommended)
        'no-duplicate-case': 2,
        // disallow empty statements (recommended)
        'no-empty': 2,
        // disallow the use of empty character classes in regular expressions (recommended)
        'no-empty-character-class': 2,
        // disallow assigning to the exception in a catch block (recommended)
        'no-ex-assign': 2,
        // disallow double-negation boolean casts in a boolean context (recommended)
        'no-extra-boolean-cast': 0,
        // disallow unnecessary parentheses
        'no-extra-parens': [0, 'all', {
            'conditionalAssign': false,
            'returnAssign': false,
            'nestedBinaryExpressions': false,
        }],
        // disallow unnecessary semicolons (recommended) (fixable)
        'no-extra-semi': 2,
        // disallow overwriting functions written as function declarations (recommended)
        'no-func-assign': 2,
        // disallow function or variable declarations in nested blocks (recommended)
        'no-inner-declarations': [2, 'both'],
        // disallow invalid regular expression strings in the RegExp constructor (recommended)
        'no-invalid-regexp': 2,
        // disallow irregular whitespace outside of strings and comments (recommended)
        'no-irregular-whitespace': 2,
        // disallow the use of object properties of the global object (Math and JSON) as functions (recommended)
        'no-obj-calls': 2,
        // Disallow use of Object.prototypes builtins directly
        'no-prototype-builtins': 1,
        // disallow multiple spaces in a regular expression literal (recommended)
        'no-regex-spaces': 2,
        // disallow sparse arrays (recommended)
        'no-sparse-arrays': 2,
        // Disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 2,
        // Avoid code that looks like two expressions but is actually one
        'no-unexpected-multiline': 2,
        // disallow unreachable statements after a return, throw, continue, or break statement (recommended)
        'no-unreachable': 2,
        // disallow control flow statements in `finally` blocks (recommended)
        'no-unsafe-finally': 2,
        // disallow negating the left operand of relational operators
        'no-unsafe-negation': 2,
        // disallow comparisons with the value NaN (recommended)
        'use-isnan': 2,
        // Ensure that the results of typeof are compared against a valid string (recommended)
        'valid-typeof': [2, {'requireStringLiterals': true}],
        'no-async-promise-executor': 2,
        'no-misleading-character-class': 2,
        'require-atomic-updates': 1,
        'no-import-assign': 2,
        'no-dupe-else-if': 2,
        'no-setter-return': 2,
        'no-loss-of-precision': 2,
        'no-promise-executor-return': 0,
        'no-unreachable-loop': 0,
        'no-unsafe-optional-chaining': 0,
        'no-useless-backreference': 0,
    },
};
