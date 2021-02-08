const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
	},

	externals: ['lodash'],

	entry: {
		index: {
			import: './src/index.mjs',
			dependOn: 'core-vendors',
		},
		'core-vendors': {
			import: ['lodash', 'vue'],
			runtime: 'runtime',
		},
	},

	output: {
		path: path.resolve(__dirname, `./dist/`),
		libraryTarget: 'umd',
	},

	plugins: [
		new HtmlWebpackPlugin(),
	],
};
