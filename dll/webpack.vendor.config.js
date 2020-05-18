const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, `dist/`);

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
	},

	entry: {
		vendor: ['lodash/camelCase'],
	},

	output: {
		path: distPath,
		filename: '[name].bundle.js',
		library: '[name]',
		libraryTarget: 'amd',
	},

	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve(distPath, '[name]-manifest.json'),
			context: __dirname,
		}),
	],
};
