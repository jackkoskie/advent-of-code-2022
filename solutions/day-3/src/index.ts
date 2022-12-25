/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {readFileSync} from 'fs';
import priority from './priorityDictionary.json';

const input = readFileSync('input.txt', 'utf8').split('\r\n');

let total1 = 0;
let total2 = 0;

// Part 1
for (const rucksack of input) {
	const compartment1 = rucksack.substring(0, rucksack.length / 2);
	const compartment2 = rucksack.substring(rucksack.length / 2, rucksack.length);

	for (const item of compartment1.split('')) {
		if (compartment2.includes(item)) {
			// @ts-expect-error - Return will always be a number
			total1 += priority[item];
			break;
		}
	}
}

console.log('Part 1: ', total1);

// Part 2
for (let i = 0; i < input.length; i += 3) {
	const elf1 = input[i].split('');
	const elf2 = input[i + 1].split('');
	const elf3 = input[i + 2].split('');

	for (const item of elf1) {
		if (elf2.includes(item) && elf3.includes(item)) {
			// @ts-expect-error - Return will always be a number
			total2 += priority[item];
			break;
		}
	}
}

console.log('Part 2: ', total2);
