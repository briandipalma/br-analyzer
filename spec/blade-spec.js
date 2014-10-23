const assert = require('assert');

const bluebird = require('bluebird');
import {getBladeSourceFileNames} from '../src/blade';

describe('Blade analyzer', () => {
	it('discovers all source files in a blade.', (done) => {
		bluebird.coroutine(discoverAllSourceFilesInABlade)(done);
	});
});

function* discoverAllSourceFilesInABlade(done) {
	//Given.
	const testBladeDirectoryName = 'spec/resources/test-bladeset/blades/test-blade';
	const expectedBladeFileNames = [
		'spec/resources/test-bladeset/blades/test-blade/src/my/name/space/MyClass.js',
		'spec/resources/test-bladeset/blades/test-blade/src/my/name/space/sub/MySubClass.js'
	];

	//When.
	const bladeFileNames = yield getBladeSourceFileNames(testBladeDirectoryName);

	//Then.
	assert.deepEqual(bladeFileNames, expectedBladeFileNames);
	done();
}
