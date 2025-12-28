const n = Math.floor(Math.random() * 1000);

let c = 0;

for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) c++;
}
if (c == 0)
    console.log(`Prime Number`)
else {
    console.log(`Not a Prime Number`)
}