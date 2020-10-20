function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j-1]; j--){
            swap(array, j, j - 1);
        }
    }
    return array;
}