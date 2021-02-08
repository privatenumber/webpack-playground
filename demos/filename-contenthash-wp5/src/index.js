console.log('entry file');

import('lodash-es').then(({ camelCase, filter }) => {
	console.log(camelCase('chunkFile'));
	console.log(filter());	
});

