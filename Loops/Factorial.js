const n = Math.floor(Math.random() * 10);

let c = 1;
for (let i = 1; i <= n; i++) {
    c *= i;
}
console.log(c);