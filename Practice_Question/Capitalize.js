const text = "Hello world! welcome to javascript programming.";
const capitalizedText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizedText);