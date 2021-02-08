console.log('entry a');

import('lodash-es').then(({ camelCase, filter }) => {
	console.log(camelCase('chunkFile'));
	console.log(filter());	
});

