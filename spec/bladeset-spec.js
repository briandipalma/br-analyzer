const assert = require('assert');

const bluebird = require('bluebird');

import {
	getBladesetBladeNames,
	getBladesetSourceFileNames,
	getBladesetAndBladesSourceFileNames
} from '../src/bladeset';

describe('Bladeset analyzer', () => {
	it('discovers all blades in a bladeset.', (done) => {
		bluebird.coroutine(discoverAllBladesInABladeset)(done);
	});

	it('discovers all bladeset source files.', (done) => {
		bluebird.coroutine(discoverAllBladessetSourceFiles)(done);
	});

	it('discovers all bladeset and blades source files.', (done) => {
		bluebird.coroutine(discoverAllBladessetAndBladesSourceFiles)(done);
	});
});

function* discoverAllBladesInABladeset(done) {
	//Given.
	const testBladesetDirectoryName = 'spec/resources/test-bladeset';
	const expectedBladeNames = [
		'spec/resources/test-bladeset/blades/test-blade'
	];

	//When.
	const bladeFileNames = yield getBladesetBladeNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladeFileNames, expectedBladeNames);
	done();
}

function* discoverAllBladessetSourceFiles(done) {
	//Given.
	const testBladesetDirectoryName = 'spec/resources/test-bladeset';
	const expectedBladesetSourceFileNames = [
		'spec/resources/test-bladeset/src/my/name/ABladesetClass.js'
	];

	//When.
	const bladesetSourceFileNames = yield getBladesetSourceFileNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladesetSourceFileNames, expectedBladesetSourceFileNames);
	done();
}

function* discoverAllBladessetAndBladesSourceFiles(done) {
	//Given.
	const testBladesetDirectoryName = 'spec/resources/test-bladeset';
	const expectedBladesetAndBladesSourceFileNames = [
		'spec/resources/test-bladeset/src/my/name/ABladesetClass.js',
		'spec/resources/test-bladeset/blades/test-blade/src/my/name/space/MyClass.js',
		'spec/resources/test-bladeset/blades/test-blade/src/my/name/space/sub/MySubClass.js'
	];

	//When.
	const bladesetAndBladesSourceFileNames = yield getBladesetAndBladesSourceFileNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladesetAndBladesSourceFileNames, expectedBladesetAndBladesSourceFileNames);
	done();
}

export const forceToBeParsedAsES6 = true;
