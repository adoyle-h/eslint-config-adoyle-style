'use strict';

const util = require('../lib/util');
util.checkPlugin('eslint-plugin-jsx-a11y');

module.exports = {
    plugins: [
        'jsx-a11y',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'jsx-a11y/anchor-has-content': 2,

        'jsx-a11y/aria-props': 2,

        'jsx-a11y/aria-proptypes': 2,

        'jsx-a11y/aria-role': 2,

        'jsx-a11y/aria-unsupported-elements': 2,

        'jsx-a11y/click-events-have-key-events': 0,

        'jsx-a11y/heading-has-content': 1,

        'jsx-a11y/html-has-lang': 2,

        'jsx-a11y/img-redundant-alt': 0,

        'jsx-a11y/lang': 2,

        'jsx-a11y/mouse-events-have-key-events': 0,

        'jsx-a11y/no-access-key': 2,

        'jsx-a11y/no-onchange': 0,

        'jsx-a11y/no-static-element-interactions': 0,

        // @TODO Maybe warning
        'jsx-a11y/role-has-required-aria-props': 0,

        'jsx-a11y/role-supports-aria-props': 2,

        // @TODO Maybe error
        'jsx-a11y/scope': 0,

        'jsx-a11y/tabindex-no-positive': 2,

        'jsx-a11y/accessible-emoji': 2,
        'jsx-a11y/alt-text': 2,
        'jsx-a11y/anchor-is-valid': 2,
        'jsx-a11y/aria-activedescendant-has-tabindex': 2,
        'jsx-a11y/iframe-has-title': 2,
        'jsx-a11y/interactive-supports-focus': 2,
        'jsx-a11y/label-has-associated-control': 2,
        'jsx-a11y/media-has-caption': 2,
        'jsx-a11y/no-autofocus': 2,
        'jsx-a11y/no-distracting-elements': 2,
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 2,
        'jsx-a11y/no-noninteractive-element-interactions': 2,
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 2,
        'jsx-a11y/no-noninteractive-tabindex': 2,
        'jsx-a11y/no-redundant-roles': 2,
        'jsx-a11y/control-has-associated-label': 1,
    },
};
