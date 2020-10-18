
// findMax [3, 0, 4, 2, 6, 1] ===> 6;
export function findMax(array) {
    let max = array[0];
    for(const element of array) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}

// reverseArray [3, 0, 4, 2, 6, 1] ===> [1, 0, 4, 2, 6, 1]
export function reverseArray(array) {
    const result = [];
    for(let i = array.length -1; i >= 0; i--) {
        const element = array[i];
        result.push(element);
    }
    return result;
}

// filterEven [3, 0, 4, 2, 6, 1] ===> [0, 4, 2, 6]
export function filterEven(array) {
    const result = [];
    for (const element of array) {
        if (element % 2 === 0) {
            result.push(element);
        }
    }
    return result;
}

