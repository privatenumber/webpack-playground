const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader')
const DependencySize = require('webpack-dependency-size');

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: true,
		minimizer: [
			new ESBuildMinifyPlugin()
		],
	},

	entry: './src/index.js',

	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				loader: 'esbuild-loader',
				options: {
					target: 'es2015', // default, or 'es20XX', 'esnext'
				},
			},
		],
	},

	output: {
		path: path.resolve(__dirname, `./dist/`),
	},

	plugins: [
		new HtmlWebpackPlugin(),
		new ESBuildPlugin(),
		new DependencySize(),
	],
};
