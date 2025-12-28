const n = Math.floor(Math.random() * 10);
let power = 1;
let i = 0;
while (i <= n && 2 ** n <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2;
    i++;
}