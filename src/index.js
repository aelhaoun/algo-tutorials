import fs from 'fs';
import { insertionSort } from './sort.js';

function appendToFile(file, text) {
    
    fs.open(file, 'a', 666, function (e, id) {
        fs.write(id, text + "\n", null, 'utf8', function () {
            fs.close(id, function () {
                // console.log('file is updated');
            });
        });
    });
}
function avgArray(array) {
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum / array.length;
}


function generateRanomArray(length) {
    const randomArray = []
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.random())
    }
    return randomArray
}

function generateWorstCase(length) {
    const array = []
    for (let i = 0; i < length; i++) {
        array.unshift(i);
    }
    return array
}

function generateBestCase(length) {
    const array = []
    for (let i = 0; i < length; i++) {
        array.push(i);
    }
    return array
}

const lengthList = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300];
const REPETITON = 500;
for (const length of lengthList) {
    let results = [];
    console.log(`-----------------Random ${length}------------------`)
    for (let i = 0; i < REPETITON; i++) {
        let generateArray = generateRanomArray(length);
        let hrstart = process.hrtime();
        insertionSort(generateArray);
        let hrend = process.hrtime(hrstart);
        results.push(hrend[1]);
    }
    let avgTime = avgArray(results) / 1000000;
    appendToFile('random.txt', `${length} ${avgTime}`)
}

for (const length of lengthList) {
    console.log(`-----------------worse case ${length}------------------`)
    let results = [];
    for (let i = 0; i < REPETITON; i++) {
        let generateArray = generateWorstCase(length);
        let hrstart = process.hrtime();
        insertionSort(generateArray);
        let hrend = process.hrtime(hrstart);
        results.push(hrend[1]);
    }
    let avgTime = avgArray(results) / 1000000;
    appendToFile('worst_case.txt', `${length} ${avgTime}`)
}

for (const length of lengthList) {
    console.log(`-----------------best case ${length}------------------`)
    let results = [];
    for (let i = 0; i < REPETITON; i++) {
        let generateArray = generateBestCase(length);
        let hrstart = process.hrtime();
        insertionSort(generateArray);
        let hrend = process.hrtime(hrstart);
        results.push(hrend[1]);
    }
    let avgTime = avgArray(results) / 1000000;
    appendToFile('best_case.txt', `${length} ${avgTime}`)
}