const path = require('path');
const fs = require('fs');
const commentMark = require('comment-mark');
const byteSize = require('byte-size');

class RecordAssetSizes {
	apply(compiler) {
		compiler.hooks.done.tapAsync('record-asset-size', (stats) => {
			const { assets } = stats.toJson();

			const readmePath = path.resolve('./README.md');
			let mdStr = fs.readFileSync(readmePath);

			mdStr = commentMark(mdStr, {
				'asset-sizes': [
					'| Asset | Size |',
					'| - | - |',
					...assets.map(a => `| ${a.name} | \`${byteSize(a.size)}\` |`),
				].join('\n'),
			});
			
			fs.writeFileSync(readmePath, mdStr);
		});
	}
}

module.exports = RecordAssetSizes;
