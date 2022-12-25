import { readFileSync } from "fs";

const getInbetween = (low: number, high: number) => { 
    let list = []
    for (var i = low; i <= high; i++) {
        list.push(i);
    }
    return list;
}

const pairs = readFileSync("input.txt", "utf8").split("\r\n");


// Part 1
let total1 = 0
let total2 = 0

for (let i = 0; i < pairs.length; i++) {
    let text = [pairs[i]]
    const [elf1, elf2] = pairs[i].split(',')

    const elf1Inbetween = getInbetween(Number(elf1.split('-')[0]), Number(elf1.split('-')[1]))
    const elf2Inbetween = getInbetween(Number(elf2.split('-')[0]), Number(elf2.split('-')[1]))

    if (elf1Inbetween.includes(Number(elf2.split('-')[0])) && elf1Inbetween.includes(Number(elf2.split('-')[1]))) {
        total1++
    } else if (elf2Inbetween.includes(Number(elf1.split('-')[0])) && elf2Inbetween.includes(Number(elf1.split('-')[1]))) {
        total1++
    }
}

console.log('Part 1: ', total1)

// Part 2
for (let i = 0; i < pairs.length; i++) {
    const [elf1, elf2] = pairs[i].split(',')

    const elf1Inbetween = getInbetween(Number(elf1.split('-')[0]), Number(elf1.split('-')[1]))
    const elf2Inbetween = getInbetween(Number(elf2.split('-')[0]), Number(elf2.split('-')[1]))

    if (elf1Inbetween.includes(Number(elf2.split('-')[0])) || elf1Inbetween.includes(Number(elf2.split('-')[1]))) {
        total2++
    } else if (elf2Inbetween.includes(Number(elf1.split('-')[0])) || elf2Inbetween.includes(Number(elf1.split('-')[1]))) {
        total2++
    }
}

console.log('Part 2: ', total2)