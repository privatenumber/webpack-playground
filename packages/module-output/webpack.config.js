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
		path: path.resolve(__dirname, `./dist/`),
		libraryTarget: 'module',
	},
};
