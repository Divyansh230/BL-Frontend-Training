const element = "1, 2, 4, 4, 2, 5, 6";
const arr = element.split(", ");
console.log(arr.reduce((acc, curr) => acc + Number(curr), 0));