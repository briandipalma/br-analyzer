var path = require('path');

var glob = require('glob');
var bluebird = require('bluebird');

var SRC_DIRECTORY = 'src';
var LIBS_DIRECTORY_GLOB = '/libs/*';
var ASPECT_SUFFIX_GLOB = '/*-aspect';
var BLADES_DIRECTORY_GLOB = '/blades/*';
var BLADESET_SUFFIX_GLOB = '/*-bladeset';
var JS_SRC_DIR_GLOB = '/' + SRC_DIRECTORY + '/**/*.js';

var globPromise = bluebird.promisify(glob);

export function retrieveAllAppJSFiles(dirToSearchFrom) {
	return bluebird.coroutine(function* () {
		//Find the current app
		var brApp = getAppDir(dirToSearchFrom);

		//Find all libs in an app
		var appsLibs = yield* getAllAppLibs(brApp);
		//Find all the aspects in an app
		var appAspects = yield* getAllAppAspects(brApp);
		//Find all the bladesets in an app
		var appBladesets = yield* getAllAppBladesets(brApp);
		//For each bladeset get their blades
		var allBladesetsBlades = yield* getAllBladesetsBlades(appBladesets);

		return allBladesetsBlades;
	})();

	//Find the sdk directory.
	//For every bladeset get their code.
	//For every aspect get their src code.
	//For every blade get their code.
	//Find all files in sdk. - then go into libs\javascript\caplin\src\caplin
}

function getAppDir(dirToSearchFrom) {
	var dirPieces = dirToSearchFrom.split(path.sep);

	return dirPieces.slice(0, dirPieces.indexOf('apps') + 2).join('/');
}

//Find all libs in an app
function* getAllAppLibs(appDirectory) {
	return yield globPromise(appDirectory + LIBS_DIRECTORY_GLOB);
}

//Find all the aspects in an app
function* getAllAppAspects(appDirectory) {
	return yield globPromise(appDirectory + ASPECT_SUFFIX_GLOB);
}

//Find all the bladesets in an app
function* getAllAppBladesets(appDirectory) {
	return yield globPromise(appDirectory + BLADESET_SUFFIX_GLOB);
}

//Find all blades in each bladesets of an app
function* getAllBladesetsBlades(bladesetDirectories) {
	var blades = bladesetDirectories.map(bladesetDir => globPromise(bladesetDir + BLADES_DIRECTORY_GLOB));

	return yield Promise.all(blades);
}



//function getRootDir(dirToSearchFrom) {
//	var dirPieces = dirToSearchFrom.split(path.sep);
//
//	return dirPieces.slice(0, dirPieces.indexOf('apps')).join('/');
//}
//
////For every blade get their code.
////Array of blade directories.
//function* getBladesSrcFiles(bladesetBlades) {
//	return yield Promise.all(bladesetBlades.map(bladesetBlade => globPromise(bladesetBlade + JS_SRC_DIR_GLOB)));
//}
