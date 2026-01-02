const arr = [1, 2, 4, 4, 2, 5, 6];

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    return arr.slice(n - k).concat(arr.slice(0, n - k));
}
console.log(rotateArray(arr, 3));