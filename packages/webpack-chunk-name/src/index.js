const value = 'entry file';

console.log(value);

import(
	/* webpackChunkName: "chunk-grouped" */
	'./chunk-a'
).then(() => console.log('chunk loaded'));


import(
	/* webpackChunkName: "chunk-grouped" */
	'./chunk-b'
).then(() => console.log('chunk loaded'));


export default value;
