const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const libraryTargets = ['var', 'this', 'window', 'global', 'commonjs', 'commonjs2', 'amd', 'amd-require', 'umd', 'system', 'jsonp'];

const base = {
	context: __dirname,
	mode: 'production',
	optimization: {
		minimize: false,
	},
	externals: [
		/lodash/,
	],
	entry: './src/index.js',
	plugins: [
		new CleanWebpackPlugin({ verbose: true }),
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
