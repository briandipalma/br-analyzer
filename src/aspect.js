import {JS_SRC_DIR_GLOB} from './constants';
import {globPromise} from './utils/utilities';

/**
 * Returns a Promise that resolves to an array containing all aspect source files.
 *
 * @param   {string} aspectDirectory - Aspect directory name.
 * @returns {Promise<string[]>} Promise that resolves to an array containing all the aspect file names.
 */
export function getAspectSourceFileNames(aspectDirectory) {
	return globPromise(aspectDirectory + JS_SRC_DIR_GLOB);
}
