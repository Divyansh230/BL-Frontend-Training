const is_prime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num) / 2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const prime = [];
let sum = 0;
let count = 0;
let i = 1;
while (count <= 100) {
    if (is_prime(i)) {
        sum += i;
        prime.push(sum);
        count++;
    }
    i++;
}
console.log(prime);