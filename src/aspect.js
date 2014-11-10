import {
	JS_SRC_DIR_GLOB,
	ASPECT_DIRECTORY_GLOB
} from './constants';
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

/**
 * Returns a Promise that resolves to an array containing all aspect names.
 *
 * @param   {string} applicationDirectory - Application directory name.
 * @returns {Promise<string[]>} Promise that resolves to an array containing all the application aspect names.
 */
export function getApplicationAspectNames(applicationDirectory) {
	return globPromise(applicationDirectory + ASPECT_DIRECTORY_GLOB);
}
