const path = require('path');

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
				},
			},
		},
	},

	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, `./dist/`),
		libraryTarget: 'umd',
	},
};
