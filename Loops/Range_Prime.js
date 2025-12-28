const is_prime = (n) => {
    let c = 0;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            c++;
            break;
        }
    }
    if (c == 0) return true;
    else return false;
}

const m = Math.floor(Math.random() * 100);
const n = Math.floor(Math.random() * 100);

for (let i = n; i <= m; i++) {
    if (is_prime(i)) {
        console.log(i);
    }
}