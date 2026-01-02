const merge_arrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const arr1 = [1, 2, 4, 4, 2, 5, 6];
const arr2 = [3, 7, 8];
console.log(merge_arrays(arr1, arr2));