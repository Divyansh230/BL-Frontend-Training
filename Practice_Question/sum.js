function addLargeNumbers(num1, num2) {
    let carry = 0;
    let result = '';
    let maxLength = Math.max(num1.length, num2.length);

    for (let i = 0; i < maxLength; i++) {
        let digit1 = i < num1.length ? parseInt(num1[num1.length - 1 - i]) : 0;
        let digit2 = i < num2.length ? parseInt(num2[num2.length - 1 - i]) : 0;

        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

console.log(addLargeNumbers('123456789123456789', '987654321987654321'));