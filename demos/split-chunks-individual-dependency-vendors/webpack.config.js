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
					name(module, chunks, cacheGroupKey) {
						const moduleFileName = path.basename(module.identifier(), '.js');
						return [cacheGroupKey, moduleFileName].join('-');
					},
					chunks: 'all',
				},
			},
		},
	},

	experiments: {
		topLevelAwait: true,
	},

	entry: './src/index.mjs',

	output: {
		path: path.resolve(__dirname, `./dist/`),
		libraryTarget: 'umd',
		chunkFilename: '[name]-[contenthash].js',
	},
};
