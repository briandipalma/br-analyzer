const assert = require('assert');

const {wrap} = require('awaitable');

import {
	getBladesetBladeNames,
	getBladesetSourceFileNames,
	getBladesetAndBladesSourceFileNames
} from '../src/bladeset';

const testBladesetDirectoryName = 'spec/resources/apps/testapp/test-bladeset';

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
	//Given.
	const expectedBladeNames = [
		'spec/resources/apps/testapp/test-bladeset/blades/test-blade'
	];

	//When.
	const bladeFileNames = yield getBladesetBladeNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladeFileNames, expectedBladeNames);
	done();
}

function* discoverAllBladessetSourceFiles(done) {
	//Given.
	const expectedBladesetSourceFileNames = [
		'spec/resources/apps/testapp/test-bladeset/src/my/name/ABladesetClass.js'
	];

	//When.
	const bladesetSourceFileNames = yield getBladesetSourceFileNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladesetSourceFileNames, expectedBladesetSourceFileNames);
	done();
}

function* discoverAllBladessetAndBladesSourceFiles(done) {
	//Given.
	const expectedBladesetAndBladesSourceFileNames = [
		'spec/resources/apps/testapp/test-bladeset/src/my/name/ABladesetClass.js',
		'spec/resources/apps/testapp/test-bladeset/blades/test-blade/src/my/name/space/MyClass.js',
		'spec/resources/apps/testapp/test-bladeset/blades/test-blade/src/my/name/space/sub/MySubClass.js'
	];

	//When.
	const bladesetAndBladesSourceFileNames = yield getBladesetAndBladesSourceFileNames(testBladesetDirectoryName);

	//Then.
	assert.deepEqual(bladesetAndBladesSourceFileNames, expectedBladesetAndBladesSourceFileNames);
	done();
}

export const forceToBeParsedAsES6 = true;
