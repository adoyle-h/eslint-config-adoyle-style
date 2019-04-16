'use strict';

const packageJSON = require('../package.json');
const {devDependencies} = packageJSON;

function satisfies(version, range) {
    const v = version.split('.');
    const flag = range.slice(0, 1);

    if (flag === '^') {
        const r = range.slice(1).split('.');
        return (v[0] === r[0]) && (Number(`${v[1]}.${v[2]}`) >= Number(`${r[1]}.${r[2]}`));
    } else if (flag === '~') {
        const r = range.slice(1).split('.');
        return (v[0] === r[0]) && (v[1] === r[1]) && (Number(v[2]) >= Number(r[2]));
    } else {
        const r = range.split('.');
        return (v[0] === r[0]) && (v[1] === r[1]) && (v[2] === r[2]);
    }
}

exports.checkPlugin = function checkPlugin(name) {
    let version;

    try {
        version = require(`${name}/package.json`).version;
    } catch(ignoreErr) {
        throw new Error(`Required dependency "${name}" is missing!`);
    }

    const versionRange = devDependencies[name];
    const result = satisfies(version, versionRange);
    if (result === false) throw new Error(`The version of dependency "${name}" should satisfy the semver "${versionRange}". Current version: ${version}`);
};
