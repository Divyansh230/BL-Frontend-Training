let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);
let max = Math.max(a + b * c, a % b + c, c + a / b, a * b + c);
let min = Math.min(a + b * c, a % b + c, c + a / b, a * b + c);

console.log(`Maximum is ${max} and Minimum is ${min}`);