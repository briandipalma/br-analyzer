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
	it('discovers all blades in a bladeset.', wrap(function* () {
		//When.
		const bladeFileNames = yield getBladesetBladeNames(testBladesetDirectoryName);

		//Then.
		assert.deepEqual(bladeFileNames, expectedBladeNames);
	}));

	it('discovers all bladeset source files.', wrap(function* () {
		//When.
		const bladesetSourceFileNames = yield getBladesetSourceFileNames(testBladesetDirectoryName);

		//Then.
		assert.deepEqual(bladesetSourceFileNames, expectedBladesetSourceFileNames);
	}));

	it('discovers all bladeset and blades source files.', wrap(function* () {
		//When.
		const bladesetAndBladesSourceFileNames = yield getBladesetAndBladesSourceFileNames(testBladesetDirectoryName);

		//Then.
		assert.deepEqual(bladesetAndBladesSourceFileNames, expectedBladesetAndBladesSourceFileNames);
	}));
});

export const forceToBeParsedAsES6Module = true;
