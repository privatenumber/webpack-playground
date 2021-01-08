const path = require('path');
const DependencySize = require('webpack-dependency-size');
const RecordAssetSizes = require('../../utils/record-asset-sizes');

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
	},

	entry: './src/index.js',

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					plugins: ['lodash'],
				},
			},
		],
	},

	output: {
		path: path.resolve(__dirname, `./dist/`),
	},

	plugins: [
		new DependencySize(),
		new RecordAssetSizes(),
	],
};
