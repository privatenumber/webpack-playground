const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const libraryTargets = [
	'var',
	// 'module',
	'assign',
	'assign-properties',
	'this',
	'window',
	'self',
	'global',
	'commonjs',
	'commonjs-module',
	'commonjs2',
	'amd',
	'amd-require',
	'umd',
	'umd2',
	'jsonp',
	'system',
	// 'promise',
	// 'import',
	// 'script',
];

const base = {
	context: __dirname,
	mode: 'production',
	optimization: {
		minimize: false,
	},
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin(),
	],
};

module.exports = libraryTargets.map(libraryTarget => ({
	...base,
	output: {
		path: path.resolve(base.context, `./dist/${libraryTarget}`),
		libraryTarget,
		library: libraryTarget.startsWith('amd') ? undefined : 'test',
	},
}));
