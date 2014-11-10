const assert = require('assert');

const {wrap} = require('awaitable');

import {
	getAspectSourceFileNames,
	getApplicationAspectNames
} from '../src/aspect';
import {
	testAppDirectoryName,
	testAspectDirectoryName,
	expectedAspectFileNames,
	expectedAspectSourceFileNames
} from './test-constants';

describe('Aspect analyzer', () => {
	it('discovers all aspects in an application.', wrap(function* () {
		//When.
		const aspectFileNames = yield getApplicationAspectNames(testAppDirectoryName);

		//Then.
		assert.deepEqual(aspectFileNames, expectedAspectFileNames);
	}));

	it('discovers all source files in an aspect.', wrap(function* () {
		//When.
		const aspectFileNames = yield getAspectSourceFileNames(testAspectDirectoryName);

		//Then.
		assert.deepEqual(aspectFileNames, expectedAspectSourceFileNames);
	}));
});

export const forceToBeParsedAsES6Module = true;
