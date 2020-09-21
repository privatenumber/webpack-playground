const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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

	plugins: [
		new CleanWebpackPlugin({ verbose: true }),
	],
};
