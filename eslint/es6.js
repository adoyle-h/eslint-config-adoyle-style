// These rules are only relevant to ES6 environments.
module.exports = {
    'env': {
        'es6': true,
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
        }
    },
    'rules': {
        // require braces around arrow function bodies
        // @TODO Upgrade to error
        'arrow-body-style': [1, 'as-needed'],
        // require parentheses around arrow function arguments (fixable)
        'arrow-parens': [2, "always"],
        // enforce consistent spacing before and after the arrow in arrow functions (fixable)
        'arrow-spacing': [2, { before: true, after: true }],
        // require super() calls in constructors (recommended)
        'constructor-super': 2,
        // enforce consistent spacing around * operators in generator functions (fixable)
        'generator-star-spacing': [2, { before: false, after: true }],
        // disallow reassigning class members (recommended)
        'no-class-assign': 2,
        // disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': [2, {
            'allowParens': true,
        }],
        // disallow reassigning const variables (recommended)
        'no-const-assign': 2,
        // disallow duplicate class members (recommended)
        'no-dupe-class-members': 2,
        // disallow duplicate module imports
        'no-duplicate-imports': 2,
        // disallow new operators with the Symbol object (recommended)
        'no-new-symbol': 2,
        // disallow specified modules when loaded by import
        'no-restricted-imports': 0,
        // disallow this/super before calling super() in constructors (recommended)
        'no-this-before-super': 2,
        // disallow unnecessary computed property keys in object literals
        'no-useless-computed-key': 2,
        // disallow unnecessary constructors
        'no-useless-constructor': 2,
        // disallow renaming import, export, and destructured assignments to the same name (fixable)
        'no-useless-rename': [2, {
            'ignoreDestructuring': false,
            'ignoreImport': false,
            'ignoreExport': false,
        }],
        // require `let` or `const` instead of `var` (fixable)
        'no-var': 2,
        // require or disallow method and property shorthand syntax for object literals (fixable)
        'object-shorthand': [2, 'always', {
            'ignoreConstructors': false,
            'avoidQuotes': true,
        }],
        // require arrow functions as callbacks
        'prefer-arrow-callback': [2, {
            'allowNamedFunctions': true,
            'allowUnboundThis': true,
        }],
        // require `const` declarations for variables that are never reassigned after declared (fixable)
        'prefer-const': [2, {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': true,
        }],
        // require Reflect methods where applicable
        'prefer-reflect': 0,
        // require rest parameters instead of arguments
        'prefer-rest-params': 1,
        // require spread operators instead of .apply()
        'prefer-spread': 0,
        // require template literals instead of string concatenation
        'prefer-template': 2,
        // require generator functions to contain `yield` (recommended)
        'require-yield': 1,
        // enforce spacing between rest and spread operators and their expressions (fixable)
        'rest-spread-spacing': [2, "never"],
        // enforce sorted import declarations within modules
        'sort-imports': 0,
        // require or disallow spacing around embedded expressions of template strings (fixable)
        'template-curly-spacing': [2, "never"],
        // require or disallow spacing around the * in yield* expressions (fixable)
        'yield-star-spacing': [2, 'after'],
        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-numeric-literals': 0,
        // require symbol descriptions
        'symbol-description': 0,
    },
};
