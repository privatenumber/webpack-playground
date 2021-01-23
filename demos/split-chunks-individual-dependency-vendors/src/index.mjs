const [lodash, vue] = await Promise.all([
	import('lodash'),
	import('vue')
]);

console.log(lodash.camelCase('test'));
