const value = 'entry file';

console.log(value);

import(
	/* webpackChunkName: "group-a" */
	'./chunk-a'
).then(() => console.log('chunk-a loaded'));


import(
	/* webpackChunkName: "group-a" */
	'./chunk-b'
).then(() => console.log('chunk-b loaded'));

export default value;
