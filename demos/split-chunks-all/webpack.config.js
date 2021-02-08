const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
					minSize: 1,
				},
			},
		},
	},

	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, `./dist/`),
		libraryTarget: 'umd',
	},

	plugins: [
		new HtmlWebpackPlugin(),
	],
};
