const path = require('path');
const DependencySize = require('webpack-dependency-size');
const RecordAssetSizes = require('../../utils/record-asset-sizes');

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
	},

	entry: {
		'entry-a': './src/entry-a.js',
		'entry-b': './src/entry-b.js',
	},

	output: {
		path: path.resolve(__dirname, `./dist/`),
		filename: '[name].[chunkhash].js',
		chunkFilename: '[id].[chunkhash].js',
	},

	plugins: [
		new DependencySize(),
		new RecordAssetSizes(),
	],
};
