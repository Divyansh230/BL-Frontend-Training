const n = Math.floor(Math.random() * 10);
let h_mean = 0;
for (let i = 1; i <= n; i++) {
    h_mean += 1 / i;
}
console.log(`Harmonic mean is ${h_mean}`);