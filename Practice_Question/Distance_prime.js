const is_prime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const prime = [];
let sum = 0;
let count = 0;
let prevPrime = 2;
let i = 3;
while (count < 100) {
    if (is_prime(i)) {
        prime.push(i - prevPrime);
        prevPrime = i;
        count++;
    }
    i++;
}
console.log(prime);