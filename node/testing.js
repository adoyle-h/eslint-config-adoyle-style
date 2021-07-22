'use strict';

const base = require('./index');

const eslintExtends = [
    ...base.extends,
    require.resolve('../plugin/jest.js'),
];

// try {
//     require.resolve('eslint-plugin-jest');
//     eslintExtends.push(require.resolve('../plugin/jest.js'));
// } catch(err) {
//     if (err.code !== 'MODULE_NOT_FOUND') {
//         throw err;
//     }
// }

module.exports = {
    ...base,
    extends: eslintExtends,
};
