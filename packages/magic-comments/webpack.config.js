const path = require('path');

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
	},

	entry: './src/index.js',

	experiments: {
		outputModule: true,
	},

	output: {
		module: true,
		path: path.resolve(__dirname, `./dist/`),
		// libraryTarget: 'module',,
		// library: libraryTarget.startsWith('amd') ? undefined : 'test',
	},
};
