import {readFileSync} from 'fs';

const input: string[] = readFileSync('input.txt', 'utf8').split('\r\n\r\n');

const totals: number[] = [];

for (const elfNumbers of input) {
	const elfTotalString: string[] = elfNumbers.split('\r\n');
	const eflTotalNumber: number[] = elfTotalString.map(item => parseInt(item, 10));
	const total: number = eflTotalNumber.reduce((a, b) => a + b);
	totals.push(total);
}

const highest: number = Math.max(...totals);
const secondHighest: number = Math.max(...totals.filter(item => item !== highest));
const thirdHighest: number = Math.max(...totals.filter(item => item !== highest && item !== secondHighest));

console.log(`Elf #${totals.indexOf(highest) + 1} has the highest total of ${highest}`);
console.log(`Elf #${totals.indexOf(secondHighest) + 1} has the second highest total of ${secondHighest}`);
console.log(`Elf #${totals.indexOf(thirdHighest) + 1} has the third highest total of ${thirdHighest}`);
console.log(`The top three elves have a total of ${highest + secondHighest + thirdHighest}`);
