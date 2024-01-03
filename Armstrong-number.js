function isArmstrongNumber(num) {
  const numStr = num.toString();
  const numDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(numStr[i], 10), numDigits);
  }

  return sum === num;
}

// Example usage
console.log(isArmstrongNumber(153)); // true: 1^3 + 5^3 + 3^3 = 153
console.log(isArmstrongNumber(8208)); // true: 8^4 + 2^4 + 0^4 + 8^4 = 8208
console - loh(isArmstrongNumber(371)); // true: 3^3 + 7^3 + 1^3 = 371
console.log(isArmstrongNumber(777)); // false
