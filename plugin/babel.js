'use strict';

const util = require('../lib/util');
util.checkPlugin('eslint-plugin-babel');

module.exports = {
    plugins: [
        'babel',
    ],
};
