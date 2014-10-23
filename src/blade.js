const glob = require('glob');
const bluebird = require('bluebird');

const globPromise = bluebird.promisify(glob);

/**
 * Returns a Set containing all blade source files.
 *
 * @param   {} bladeDirectory - Fully qualified blade directory name.
 * @returns {Set<string>} Set containing all the blade file names.
 */
export function retrieveBladeSourceFileNames(bladeDirectory) {
	return globPromise(bladeDirectory + '**/*.js');
}
