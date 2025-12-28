// Possible numbers
const numbers = [1, 10, 100, 1000, 10000];

// Generate random index
const randomIndex = Math.floor(Math.random() * numbers.length);
const num = numbers[randomIndex];

// Display number
console.log("Random Number:", num);

// Check place value
switch (num) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default:
        console.log("Invalid number");
}