/* eslint-disable @typescript-eslint/naming-convention */
import {readFileSync} from 'fs';

const input = readFileSync('./input.txt', 'utf-8').split('\r\n');

type Output = 'X' | 'Y' | 'Z';

let score1 = 0;
let score2 = 0;

const scores = {
	X: 1,
	Y: 2,
	Z: 3,
	loose: 0,
	tie: 3,
	win: 6,
};

for (const round of input) {
	const input = round.split(' ')[0];
	const output = round.split(' ')[1] as Output;

	let tempScore1 = 0;

	tempScore1 += scores[output];

	// Part 1
	switch (input) {
		case 'A':
			if (output === 'X') {
				tempScore1 += scores.tie;
			} else if (output === 'Y') {
				tempScore1 += scores.win;
			} else if (output === 'Z') {
				tempScore1 += scores.loose;
			}

			break;

		case 'B':
			if (output === 'X') {
				tempScore1 += scores.loose;
			} else if (output === 'Y') {
				tempScore1 += scores.tie;
			} else if (output === 'Z') {
				tempScore1 += scores.win;
			}

			break;

		case 'C':
			if (output === 'X') {
				tempScore1 += scores.win;
			} else if (output === 'Y') {
				tempScore1 += scores.loose;
			} else if (output === 'Z') {
				tempScore1 += scores.tie;
			}

			break;

		default:
			break;
	}

	score1 += tempScore1;

	// Part 2
	let outputCalculated: Output = 'X';

	switch (input) {
		case 'A':
			if (output === 'X') {
				outputCalculated = 'Z';
			} else if (output === 'Y') {
				outputCalculated = 'X';
			} else if (output === 'Z') {
				outputCalculated = 'Y';
			}

			break;

		case 'B':
			if (output === 'X') {
				outputCalculated = 'X';
			} else if (output === 'Y') {
				outputCalculated = 'Y';
			} else if (output === 'Z') {
				outputCalculated = 'Z';
			}

			break;

		case 'C':
			if (output === 'X') {
				outputCalculated = 'Y';
			} else if (output === 'Y') {
				outputCalculated = 'Z';
			} else if (output === 'Z') {
				outputCalculated = 'X';
			}

			break;

		default:
			break;
	}

	if (output === 'X') {
		score2 = score2 + scores[outputCalculated] + scores.loose;
	} else if (output === 'Y') {
		score2 = score2 + scores[outputCalculated] + scores.tie;
	} else if (output === 'Z') {
		score2 = score2 + scores[outputCalculated] + scores.win;
	}
}

console.log(`Total score for part 1 is ${score1}`);
console.log(`Total score for part 2 is ${score2}`);
