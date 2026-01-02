const ceaser_cypher = (text, shift) => {
    result = '';
    shift = shift % 26;

    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            result = result + String.fromCharCode((char.charCodeAt(0) - 65 + shift + 26) % 26 + 65);
        } else if (char >= 'a' && char <= 'z') {
            result = result + String.fromCharCode((char.charCodeAt(0) - 97 + shift + 26) % 26 + 97);
        } else {
            result += char;
        }
    }
    return result;
}

console.log(ceaser_cypher("Hello, World!", 3)); // Khoor, Zruog!