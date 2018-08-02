'use strict';

const load = require('config-sp').load;
const config = load(__dirname, ['default.js', 'local.js'], {
    ignores: 'local.js',
});
module.exports = config;
