const assert = require('assert');

const {wrap} = require('awaitable');

import {getAspectSourceFileNames} from '../src/aspect';
import {
	testAspectDirectoryName,
	expectedAspectFileNames
} from './test-constants';

describe('Aspect analyzer', () => {
	it('discovers all source files in an aspect.', wrap(function* () {
		//When.
		const aspectFileNames = yield getAspectSourceFileNames(testAspectDirectoryName);

		//Then.
		assert.deepEqual(aspectFileNames, expectedAspectFileNames);
	}));
});
