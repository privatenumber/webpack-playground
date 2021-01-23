const path = require('path');
const fs = require('fs');
const commentMark = require('comment-mark');

const demosDir = path.resolve('./demos');

function getDemos() {
	let demos = fs.readdirSync(demosDir).filter(f => !f.startsWith('.'));
	demos = demos.map(demo => {
		const { description } = require(path.join(demosDir, demo, 'package.json'));
		return {
			name: demo,
			description,
		};
	});

	return demos;
}

let mdStr = fs.readFileSync('./README.md');

mdStr = commentMark(mdStr, {
	demos: getDemos().map(demo => `- [${demo.name}](/demos/${demo.name})\n\n\t${demo.description}`).join('\n\n'),
});

fs.writeFileSync('./README.md', mdStr);
