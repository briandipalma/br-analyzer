const assert = require('assert');

const {wrap} = require('awaitable');
import {getBladeSourceFileNames} from '../src/blade';
import {
	testBladeDirectoryName,
	expectedBladeFileNames
} from './test-constants';

describe('Blade analyzer', () => {
	it('discovers all source files in a blade.', (done) => {
		wrap(discoverAllSourceFilesInABlade)(done);
	});
});

function* discoverAllSourceFilesInABlade(done) {
	//When.
	const bladeFileNames = yield getBladeSourceFileNames(testBladeDirectoryName);

	//Then.
	assert.deepEqual(bladeFileNames, expectedBladeFileNames);
	done();
}
