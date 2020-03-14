const {emptyStrings, parseModifiers} = require('./common');
const {
	START,
	END,
	COLOR_RESET,
} = require('./constants');

const FG_256 = '38;5;';
const BG_256 = '48;5;';

/*
	black: 16
	darkRed: 124
	red: 196
	green: 22
	lightGreen1: 28
	lightGreen2: 34
	yellow: 190
	blue: 27
	lightBlue1: 33
	lightBlue2: 39
	pink: 199
	orange: 202
	lightOrange: 214
	purple: 91
	lightPurple: 128
	brown: 130
	turquise: 44
	white: 255
*/

const palette = {
	createColor (fgColorNumber, bgColorNumber, modifier) {
		const fg = parse256Color(fgColorNumber, true);
		const bg = parse256Color(bgColorNumber, false);
		const mod = parseModifiers(modifier);

		const color = [fg, bg, mod].filter(emptyStrings).join(';');
		const wrappedColor = START + color + END;

		return function colorize (txt) {
			return wrappedColor + txt + COLOR_RESET;
		};
	},
};

function parse256Color (color256, isForeground) {
	if (color256 == null) return '';
	if (typeof color256 != 'number' || color256 < 0 || color256 > 255) {
		throw new Error('0-255 ' + color256);
	}
	const prefix = isForeground ? FG_256 : BG_256;

	return prefix + color256;
}

module.exports = palette;
