const assert = require('assert');

import {retrieveBladeSourceFileNames} from '../src/blade';

describe('Blade analyzer', () => {
	it('discovers all source files in a blade.', (done) => {
		//Given.
		const testBladeDirectoryName = 'spec/resources/test-bladeset/blades/test-blade/';
		const expectedBladeFileNames = [
			'spec/resources/test-bladeset/blades/test-blade/src/my/name/space/MyClass.js',
			'spec/resources/test-bladeset/blades/test-blade/src/my/name/space/sub/MySubClass.js'
		];

		//When.
		const bladeFileNamesPromise = retrieveBladeSourceFileNames(testBladeDirectoryName);

		//Then.
		bladeFileNamesPromise
			.then((bladeFileNames) => {
				assert.deepEqual(bladeFileNames, expectedBladeFileNames);
			})
			.then(() => done());
	});
});
