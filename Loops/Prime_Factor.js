const prime_factor = (N) => {
    let n = N;
    for (let i = 2; i * i <= N; i++) {
        if (n % i == 0) {
            console.log(i);
        }
        n = n / i;
    }
    if (n > 1) console.log(n);
}


let n = Math.floor(Math.random() * 500);
prime_factor(n);