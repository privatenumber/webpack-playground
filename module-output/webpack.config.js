const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
	},

	// externals: [
	// 	/lodash/,
	// ],

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

	plugins: [
		new CleanWebpackPlugin({ verbose: true }),
	],
};
