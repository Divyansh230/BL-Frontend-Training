const day = Math.floor(Math.random() * 30) + 1;
const month = parseInt(Math.random() * 12) + 1;

let result = false;

// Check date range
if (
    (month === 3 && day >= 20) ||
    (month === 4) ||
    (month === 5) ||
    (month === 6 && day <= 20)
) {
    result = true;
}

console.log(result);