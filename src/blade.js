import {JS_SRC_DIR_GLOB} from './constants';
import {globPromise} from './utils/utilities';

/**
 * Returns a Promise that resolves to an array containing all blade source files.
 *
 * @param   {string} bladeDirectory - Blade directory name.
 * @returns {Promise<string[]>} Promise that resolves to an array containing all the blade file names.
 */
export function getBladeSourceFileNames(bladeDirectory) {
	return globPromise(bladeDirectory + JS_SRC_DIR_GLOB);
}
