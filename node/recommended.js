'use strict';

const base = require('./index');

const eslintExtends = [
    ...base.extends,
    require.resolve('../plugin/jest.js'),
];

module.exports = {
    ...base,
    extends: eslintExtends,
};
