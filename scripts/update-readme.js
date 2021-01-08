const path = require('path');
const fs = require('fs');
const commentMark = require('comment-mark');

const demoDir = path.resolve('./packages');

function getDemos() {
	let demos = fs.readdirSync(demoDir).filter(f => !f.startsWith('.'));
	demos = demos.map(demo => {
		const { description } = require(path.join(demoDir, demo, 'package.json'));
		return {
			name: demo,
			description,
		};
	});

	return demos;
}

let mdStr = fs.readFileSync('./README.md');

console.log(getDemos());

mdStr = commentMark(mdStr, {
	demos: getDemos().map(demo => `- [${demo.name}](/packages/${demo.name}): ${demo.description}`).join('\n'),
});

fs.writeFileSync('./README.md', mdStr);
