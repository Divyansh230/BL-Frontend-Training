const string = "Hello, World!";
const asciiValues = [];

for (let i = 0; i < string.length; i++) {
    asciiValues.push(string.charCodeAt(i));
}

console.log(asciiValues);