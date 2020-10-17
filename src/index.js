export function sum(a, b) {
    return a + b;
}

export function sumArray(array) {
    let result = 0;
    for(const element of array) {
        result += element;
    }
    return result;
}

export function countEven(array) {
    let count = 0;
    for (const element of array) {
        if (element % 2 === 0) {
            count++;
        }
    }
    return count;
}