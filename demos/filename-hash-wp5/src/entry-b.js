console.log('entry b');

import('lodash-es').then(({ camelCase, filter }) => {
	console.log(camelCase('chunkFile'));
	console.log(filter());	
});

