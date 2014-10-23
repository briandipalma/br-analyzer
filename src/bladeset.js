const glob = require('glob');
const bluebird = require('bluebird');

import {
	JS_SRC_DIR_GLOB,
	BLADES_DIRECTORY_GLOB
} from './constants';

const globPromise = bluebird.promisify(glob);

/**
 * Returns a Promise that resolves to an array containing all bladeset blade names.
 *
 * @param   {string} bladesetDirectory - Bladeset directory name.
 * @returns {Promise<string[]>} Promise that resolves to an array containing all the bladeset blade names.
 */
export function getBladesetBladeNames(bladesetDirectory) {
	return globPromise(bladesetDirectory + BLADES_DIRECTORY_GLOB);
}

/**
 * Returns a Promise that resolves to an array containing all bladeset source file names.
 *
 * @param   {string} bladesetDirectory - Bladeset directory name.
 * @returns {Promise<string[]>} Promise that resolves to an array containing all the bladeset source file names.
 */
export function getBladesetSourceFileNames(bladesetDirectory) {
	return globPromise(bladesetDirectory + JS_SRC_DIR_GLOB);
}
