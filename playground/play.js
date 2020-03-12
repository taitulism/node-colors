/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
const safePalette = require('../src/safe-palette');
const palette256 = require('../src/256-palette');

const TEXT = 'This is the message';

// Safe Colors
/*
const black   = safePalette.colors.black('BLACK');
const red     = safePalette.colors.red('RED');
const green   = safePalette.colors.green('GREEN');
const yellow  = safePalette.colors.yellow('YELLOW');
const blue    = safePalette.colors.blue('BLUE');
const magenta = safePalette.colors.magenta('MAGENTA');
const cyan    = safePalette.colors.cyan('CYAN');
const white   = safePalette.colors.white('WHITE');

const boldBlack   = safePalette.colors.bold.black('BOLD BLACK');
const boldRed     = safePalette.colors.bold.red('BOLD RED');
const boldGreen   = safePalette.colors.bold.green('BOLD GREEN');
const boldYellow  = safePalette.colors.bold.yellow('BOLD YELLOW');
const boldBlue    = safePalette.colors.bold.blue('BOLD BLUE');
const boldMagenta = safePalette.colors.bold.magenta('BOLD MAGENTA');
const boldCyan    = safePalette.colors.bold.cyan('BOLD CYAN');
const boldWhite   = safePalette.colors.bold.white('BOLD WHITE');

console.log(black);
console.log(red);
console.log(green);
console.log(yellow);
console.log(blue);
console.log(magenta);
console.log(cyan);
console.log(white);

console.log(boldBlack);
console.log(boldRed);
console.log(boldGreen);
console.log(boldYellow);
console.log(boldBlue);
console.log(boldMagenta);
console.log(boldCyan);
console.log(boldWhite);
*/


// 256 colors
function print256 () {
	const perRow = 12;

	// base colors & bold
	console.log('Base & bright colors:');
	for (let i = 0; i < 16; i += 8) {
		const colorAry = [];

		for (let j = 0; j < 8; j++) {
			const colorNumber = i + j;
			const colorize = palette256.createColor(0, colorNumber);
			const colorTxt = colorNumber < 10 ? '  ' + colorNumber : ' ' + colorNumber;
			const msg = colorize(` ${colorTxt} `);

			colorAry.push(msg);
		}
		console.log(colorAry.join(''));
	}

	console.log('\nColors:');
	for (let i = 16; i < 232; i += perRow) {
		const colorAry = [];

		for (let j = 0; j < perRow; j++) {
			const colorNumber = i + j;
			const colorize = palette256.createColor(0, colorNumber);
			const colorTxt = colorNumber < 100 ? ' ' + colorNumber : colorNumber;
			const msg = colorize(` ${colorTxt} `);

			colorAry.push(msg);
		}

		console.log(colorAry.join(''));
	}

	console.log('\nBlack > Gray Scale > White');
	for (let i = 232; i < 256; i += perRow) {
		const colorAry = [];

		for (let j = 0; j < perRow; j++) {
			const colorNumber = i + j;
			const fg = i < 244 ? 7 : 0;
			const colorize = palette256.createColor(fg, colorNumber);
			const msg = colorize(` ${colorNumber} `);

			colorAry.push(msg);
		}
		console.log(colorAry.join(''));
	}
}

print256();
