'use strict';
// These rules are only relevant to ES6 environments.
module.exports = {
    'env': {
        'es6': false,
    },
    'ecmaFeatures': {
        'arrowFunctions': true,
        'blockBindings': true,
        'classes': true,
        'defaultParams': true,
        'destructuring': true,
        'forOf': true,
        'generators': false,
        'modules': true,
        'objectLiteralComputedProperties': true,
        'objectLiteralDuplicateProperties': false,
        'objectLiteralShorthandMethods': true,
        'objectLiteralShorthandProperties': true,
        'restParams': true,
        'spread': true,
        'superInFunctions': true,
        'templateStrings': true,
        'jsx': true,
    },
    'rules': {
        // require braces in arrow function body
        'arrow-body-style': [2, 'as-needed'],
        // require parens in arrow function arguments
        'arrow-parens': ,
        // require space before/after arrow function's arrow (fixable)
        'arrow-spacing': ,
        // verify calls of `super()` in constructors (recommended)
        'constructor-super': ,
        // enforce spacing around the `*` in generator functions (fixable)
        'generator-star-spacing': ,
        // disallow modifying variables of class declarations (recommended)
        'no-class-assign': ,
        // disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': ,
        // disallow modifying variables that are declared using `const` (recommended)
        'no-const-assign': ,
        // disallow duplicate name in class members (recommended)
        'no-dupe-class-members': ,
        // disallow use of the `new` operator with the `Symbol` object (recommended)
        'no-new-symbol': ,
        // disallow use of `this`/`super` before calling `super()` in constructors (recommended)
        'no-this-before-super': ,
        // require `let` or `const` instead of `var`
        'no-var': ,
        // disallow unnecessary constructor
        'no-useless-constructor': ,
        // require method and property shorthand syntax for object literals
        'object-shorthand': ,
        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': ,
        // suggest using `const` declaration for variables that are never modified after declared
        'prefer-const': ,
        // suggest using Reflect methods where applicable
        'prefer-reflect': ,
        // suggest using the rest parameters instead of `arguments`
        'prefer-rest-params': ,
        // suggest using the spread operator instead of `.apply()`.
        'prefer-spread': ,
        // suggest using template literals instead of strings concatenation
        'prefer-template': ,
        // disallow generator functions that do not have `yield`
        'require-yield': ,
        // enforce spacing around the `*` in `yield*` expressions (fixable)
        'yield-star-spacing': ,
    },
};