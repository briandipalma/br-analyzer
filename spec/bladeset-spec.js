const assert = require('assert');

const bluebird = require('bluebird');

import {getBladesetBladeNames, getBladesetSourceFileNames} from '../src/bladeset';

describe('Bladeset analyzer', () => {
	it('discovers all blades in a bladeset.', (done) => {
		bluebird.coroutine(discoverAllBladesInABladeset)(done);
	});

	it('discovers all bladeset source files.', (done) => {
		bluebird.coroutine(discoverAllBladessetSourceFiles)(done);
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
