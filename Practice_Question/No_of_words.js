const text = "hello world this is a test. Let's count the number of words!,Happy coding.";
const words = text.split('.').join(' ').split(' ').join('!,').split('!,');

console.log("Number of words:", words.length);