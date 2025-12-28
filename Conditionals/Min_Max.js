let a = Math.floor(Math.random() * 10) + 100;
let b = Math.floor(Math.random() * 10) + 100;
let c = Math.floor(Math.random() * 10) + 100;

let min = Math.min(a, b, c);
let max = Math.max(a, b, c);

console.log(`Maximum ${max} and Minimum is ${min}`);