const glob = require('glob');
const promisify = require('native-promisify');

export const globPromise = promisify(glob);
