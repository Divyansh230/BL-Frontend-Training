let num = Math.floor(Math.random() * 10) + 1000;


let year = num % 4 == 0 && (num % 100 != 0 || num % 400 == 0);
console.log(`${num} is Leap Year: ${year}`);