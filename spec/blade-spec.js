const assert = require('assert');

const {wrap} = require('awaitable');
import {getBladeSourceFileNames} from '../src/blade';

describe('Blade analyzer', () => {
	it('discovers all source files in a blade.', (done) => {
		wrap(discoverAllSourceFilesInABlade)(done);
	});
});

function* discoverAllSourceFilesInABlade(done) {
	//Given.
	const testBladeDirectoryName = 'spec/resources/apps/testapp/test-bladeset/blades/test-blade';
	const expectedBladeFileNames = [
		'spec/resources/apps/testapp/test-bladeset/blades/test-blade/src/my/name/space/MyClass.js',
		'spec/resources/apps/testapp/test-bladeset/blades/test-blade/src/my/name/space/sub/MySubClass.js'
	];

	//When.
	const bladeFileNames = yield getBladeSourceFileNames(testBladeDirectoryName);

	//Then.
	assert.deepEqual(bladeFileNames, expectedBladeFileNames);
	done();
}
