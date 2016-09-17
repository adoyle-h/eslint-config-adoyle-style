// These rules are purely matters of style and are quite subjective.
module.exports = {
    'rules': {
        // enforce spacing inside array brackets (fixable)
        'array-bracket-spacing': [2, 'never', {
            'singleValue': false,
            'objectsInArrays': false,
            'arraysInArrays': false
        }],
        // disallow or enforce spaces inside of single line blocks (fixable)
        // @Maybe ignore it
        'block-spacing': [0, 'never'],
        // enforce one true brace style
        'brace-style': [2, '1tbs', {'allowSingleLine': true}],
        // require camel case names
        'camelcase': [2, {'properties': 'always'}],
        // require or disallow trailing commas (fixable)
        'comma-dangle': [2, 'always-multiline'],
        // enforce spacing before and after comma (fixable)
        'comma-spacing': [2, {'before': false, 'after': true}],
        // enforce one true comma style
        'comma-style': [2, 'last'],
        // require or disallow padding inside computed properties (fixable)
        'computed-property-spacing': [2, 'never'],
        // enforce consistent naming when capturing the current execution context
        'consistent-this': 0,
        // enforce newline at the end of file, with no multiple empty lines (fixable)
        'eol-last': 2,
        // require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': [2, 'never'],
        // require function expressions to have a name
        'func-names': 0,
        // enforce use of function declarations or expressions
        'func-style': [2, 'declaration', {'allowArrowFunctions': true}],
        // blacklist certain identifiers to prevent them being used
        'id-blacklist': 0,
        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-length': 0,
        // require identifiers to match the provided regular expression
        'id-match': 0,
        // specify tab or space width for your code (fixable)
        'indent': [2, 4, {'SwitchCase': 1, 'VariableDeclarator': { 'var': 1, 'let': 1, 'const': 1}}],
        // specify whether double or single quotes should be used in JSX attributes (fixable)
        'jsx-quotes': [2, 'prefer-double'],
        // enforce spacing between keys and values in object literal properties
        'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
        // enforce spacing before and after keywords (fixable)
        'keyword-spacing': [2, {'before': true, 'after': true, 'overrides': {
            'catch': {'after': false},
            'switch': {'after': false},
        }}],
        // disallow mixed 'LF' and 'CRLF' as linebreaks
        'linebreak-style': [2, 'unix'],
        // enforce empty lines around comments
        'lines-around-comment': 0,
        // specify the maximum depth that blocks can be nested
        'max-depth': [2, 4],
        // specify the maximum length of a line in your program
        'max-len': [2, {
            'code': 100, 'comments': 1024, 'tabWidth': 4,
            'ignoreUrls': true,
            'ignoreComments': true,
            'ignoreTrailingComments': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
        }],
        // enforce a maximum file length
        'max-lines': 0,
        // specify the maximum depth callbacks can be nested
        'max-nested-callbacks': [1, 10],
        // limits the number of parameters that can be used in the function declaration.
        'max-params': [1, 4],
        // specify the maximum number of statement allowed in a function
        'max-statements': 0,
        // specify the maximum number of statements allowed per line
        'max-statements-per-line': 0,
        // enforce newlines between operands of ternary expressions
        'multiline-ternary': 0,
        // require a capital letter for constructors
        'new-cap': [2, {'newIsCap': true, 'capIsNew': true, 'properties': true}],
        // disallow the omission of parentheses when invoking a constructor with no arguments
        'new-parens': 2,
        // require or disallow an empty newline after variable declarations
        'newline-after-var': 0,
        // require newline before return statement
        'newline-before-return': 0,
        // enforce newline after each call when chaining the calls
        'newline-per-chained-call': 0,
        // disallow use of the `Array` constructor
        'no-array-constructor': 2,
        // disallow use of bitwise operators
        'no-bitwise': [2, {'allow': ['~']}],
        // disallow use of the `continue` statement
        'no-continue': 0,
        // disallow comments inline after code
        'no-inline-comments': 0,
        // disallow `if` as the only statement in an `else` block
        'no-lonely-if': 1,
        // disallow mixes of different operators
        'no-mixed-operators': 1,
        // disallow mixed spaces and tabs for indentation (recommended)
        'no-mixed-spaces-and-tabs': 2,
        // disallow multiple empty lines
        'no-multiple-empty-lines': [2, {'max': 2, 'maxEOF': 1}],
        // disallow negated conditions
        'no-negated-condition': 0,
        // disallow nested ternary expressions
        'no-nested-ternary': 2,
        // disallow the use of the `Object` constructor
        'no-new-object': 2,
        // disallow use of unary operators, `++` and `--`
        'no-plusplus': 0,
        // disallow use of certain syntax in code
        'no-restricted-syntax': [2, 'WithStatement'],
        // Disallow tabs in file
        'no-tabs': 2,
        // disallow the use of ternary operators
        'no-ternary': 0,
        // disallow trailing whitespace at the end of lines (fixable)
        'no-trailing-spaces': 2,
        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 0,
        // disallow the use of ternary operators when a simpler alternative exists
        'no-unneeded-ternary': 2,
        // disallow whitespace before properties
        'no-whitespace-before-property': 2,
        // enforce consistent line breaks inside braces (fixable)
        'object-curly-newline': 0,
        // require or disallow padding inside curly braces (fixable)
        'object-curly-spacing': [2, 'never'],
        // enforce placing object properties on separate lines
        'object-property-newline': 0,
        // require or disallow one variable declaration per function
        'one-var': [2, {'uninitialized': 'always', 'initialized': 'never'}],
        // require or disallow an newline around variable declarations
        'one-var-declaration-per-line': [2, 'initializations'],
        // require assignment operator shorthand where possible or prohibit it entirely
        'operator-assignment': 0,
        // enforce operators to be placed before or after line breaks
        'operator-linebreak': 0,
        // enforce padding within blocks
        'padded-blocks': [2, 'never'],
        // require quotes around object literal property names
        'quote-props': [2, 'as-needed', {
            'keywords': false,
            'unnecessary': false,
            'numbers': false,
        }],
        // specify whether backticks, double or single quotes should be used (fixable)
        'quotes': [2, 'single', {'avoidEscape': false, 'allowTemplateLiterals': true}],
        // Require JSDoc comment
        'require-jsdoc': 0,
        // require or disallow use of semicolons instead of ASI (fixable)
        'semi': [2, 'always'],
        // enforce spacing before and after semicolons (fixable)
        'semi-spacing': [2, {'before': false, 'after': true}],
        // requires object keys to be sorted
        'sort-keys': 0,
        // sort variables within the same declaration block
        'sort-vars': 0,
        // require or disallow a space before blocks (fixable)
        'space-before-blocks': 2,
        // require or disallow a space before function opening parenthesis (fixable)
        'space-before-function-paren': [2, {
            'anonymous': 'never',
            'named': 'never',
        }],
        // require or disallow spaces inside parentheses
        'space-in-parens': [2, 'never'],
        // require spaces around operators (fixable)
        'space-infix-ops': 2,
        // require or disallow spaces before/after unary operators (fixable)
        'space-unary-ops': [2, {'words': true, 'nonwords': false}],
        // require or disallow a space immediately following the `//` or `/*` in a comment
        'spaced-comment': [2, 'always', {
            'line': {
                'markers': ['=', '!', '/'],
                'exceptions': ['-', '+'],
            },
            'block': {
                'markers': ['=', '!', '*', ','],
                'exceptions': ['-', '+', '*', ','],
            },
        }],
        // require or disallow the Unicode BOM (fixable)
        'unicode-bom': 0,
        // require regex literals to be wrapped in parentheses
        'wrap-regex': 0,
        // enforce position of line comments
        'line-comment-position': 0,
        // require or disallow newlines around directives<Paste>
        'lines-around-directive': 0,
    },
};
