const assert = require('assert');

const {wrap} = require('awaitable');

import {
	getBladesetBladeNames,
	getBladesetSourceFileNames,
	getBladesetAndBladesSourceFileNames
} from '../src/bladeset';
import {
	expectedBladeNames,
	testBladesetDirectoryName,
	expectedBladesetSourceFileNames,
	expectedBladesetAndBladesSourceFileNames
} from './test-constants';

describe('Bladeset analyzer', () => {
	it('discovers all blades in a bladeset.', (done) => {
		wrap(discoverAllBladesInABladeset)(done);
	});

	it('discovers all bladeset source files.', (done) => {
		wrap(discoverAllBladessetSourceFiles)(done);
	});

	it('discovers all bladeset and blades source files.', (done) => {
		wrap(discoverAllBladessetAndBladesSourceFiles)(done);
	});
});

function* discoverAllBladesInABladeset(done) {
	//When.
	const bladeFileNames = yield getBladesetBladeNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladeFileNames, expectedBladeNames);
	done();
}

function* discoverAllBladessetSourceFiles(done) {
	//When.
	const bladesetSourceFileNames = yield getBladesetSourceFileNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladesetSourceFileNames, expectedBladesetSourceFileNames);
	done();
}

function* discoverAllBladessetAndBladesSourceFiles(done) {
	//When.
	const bladesetAndBladesSourceFileNames = yield getBladesetAndBladesSourceFileNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladesetAndBladesSourceFileNames, expectedBladesetAndBladesSourceFileNames);
	done();
}

export const forceToBeParsedAsES6 = true;
