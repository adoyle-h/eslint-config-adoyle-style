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
        // require braces around arrow function bodies
        'arrow-body-style': [2, 'as-needed'],
        // require parentheses around arrow function arguments
        'arrow-parens': ,
        // enforce consistent spacing before and after the arrow in arrow functions (fixable)
        'arrow-spacing': ,
        // require super() calls in constructors (recommended)
        'constructor-super': ,
        // enforce consistent spacing around * operators in generator functions (fixable)
        'generator-star-spacing': ,
        // disallow reassigning class members (recommended)
        'no-class-assign': ,
        // disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': ,
        // disallow reassigning const variables (recommended)
        'no-const-assign': ,
        // disallow duplicate class members (recommended)
        'no-dupe-class-members': ,
        // disallow duplicate module imports
        'no-duplicate-imports': ,
        // disallow new operators with the Symbol object (recommended)
        'no-new-symbol': ,
        // disallow specified modules when loaded by import
        'no-restricted-imports': ,
        // disallow this/super before calling super() in constructors (recommended)
        'no-this-before-super': ,
        // disallow unnecessary computed property keys in object literals
        'no-useless-computed-key': ,
        // disallow unnecessary constructors
        'no-useless-constructor': ,
        // disallow renaming import, export, and destructured assignments to the same name (fixable)
        'no-useless-rename': ,
        // require let or const instead of var
        'no-var': ,
        // require or disallow method and property shorthand syntax for object literals
        'object-shorthand': ,
        // require arrow functions as callbacks
        'prefer-arrow-callback': ,
        // require const declarations for variables that are never reassigned after declared
        'prefer-const': ,
        // require Reflect methods where applicable
        'prefer-reflect': ,
        // require rest parameters instead of arguments
        'prefer-rest-params': ,
        // require spread operators instead of .apply()
        'prefer-spread': ,
        // require template literals instead of string concatenation
        'prefer-template': ,
        // require generator functions to contain yield
        'require-yield': ,
        // enforce spacing between rest and spread operators and their expressions (fixable)
        'rest-spread-spacing': ,
        // enforce sorted import declarations within modules
        'sort-imports': 0,
        // require or disallow spacing around embedded expressions of template strings (fixable)
        'template-curly-spacing': ,
        // require or disallow spacing around the * in yield* expressions (fixable)
        'yield-star-spacing': ,
    },
};