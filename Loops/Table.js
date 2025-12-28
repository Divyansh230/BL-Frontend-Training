const n = Math.floor(Math.random() * 10);

let num = 2 ** n;

for (let i = 1; i <= num; i++) {
    console.log(`2 * ${i} = ${2*i}`);
}