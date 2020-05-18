const webpack = require('webpack');
const path = require('path');

const distPath = path.resolve(__dirname, `dist/`);

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
	},

	entry: './src/index.js',

	output: {
		path: distPath,
		libraryTarget: 'amd',
	},

	plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require(path.resolve(distPath, 'vendor-manifest.json')),
		}),
	],
};
