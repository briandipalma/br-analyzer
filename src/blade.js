const glob = require('glob');
const bluebird = require('bluebird');

const globPromise = bluebird.promisify(glob);

/**
 * Returns a Promise that resolves to an array containing all blade source files.
 *
 * @param   {string} bladeDirectory - Blade directory name.
 * @returns {Promise<string[]>} Promise that resolves to an array containing all the blade file names.
 */
export function getBladeSourceFileNames(bladeDirectory) {
	return globPromise(bladeDirectory + '**/*.js');
}
