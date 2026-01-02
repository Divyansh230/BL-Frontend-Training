const arr2 = [3, 7, 8];
const arr1 = [1, 2, 4, 4, 2, 5, 6];

const arr3 = arr1.filter(item => !arr2.includes(item));
return [...arr3, ...arr1];