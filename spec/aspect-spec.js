const assert = require('assert');

const {wrap} = require('awaitable');

import {getAspectSourceFileNames} from '../src/aspect';

describe('Aspect analyzer', () => {
	it('discovers all source files in an aspect.', (done) => {
		wrap(discoverAllSourceFilesInAnAspect)(done);
	});
});

function* discoverAllSourceFilesInAnAspect(done) {
	//Given.
	const testAspectDirectoryName = 'spec/resources/apps/testapp/test-aspect';
	const expectedAspectFileNames = [
		'spec/resources/apps/testapp/test-aspect/src/my/AspectClass.js'
	];

	//When.
	const aspectFileNames = yield getAspectSourceFileNames(testAspectDirectoryName);

	//Then.
	assert.deepEqual(aspectFileNames, expectedAspectFileNames);
	done();
}
