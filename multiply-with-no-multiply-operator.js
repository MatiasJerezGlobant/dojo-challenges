function multiply(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  const resultIsNegative = (a < 0) ^ (b < 0);
  a = Math.abs(a);
  b = Math.abs(b);
  const result = a + multiply(a, b - 1);
  return resultIsNegative ? -result : result;
}

console.log("Multiply(4, 5) -> ", multiply(4, 5)); // 20
console.log("Multiply(-4, 5) -> ", multiply(-4, 5)); // -20
console.log("Multiply(4, -5) -> ", multiply(4, -5)); // -20
console.log("Multiply(-4, -5) -> ", multiply(-4, -5)); // 20
console.log("Multiply(1, 5) -> ", multiply(1, 5)); // 5
console.log("Multiply(0, 5) -> ", multiply(0, 5)); // 0
