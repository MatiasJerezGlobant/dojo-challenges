function nthUglyNumber(n) {
  const uglyNumbers = [1];
  let i2 = 0,
    i3 = 0,
    i5 = 0;

  while (uglyNumbers.length < n) {
    const next2 = uglyNumbers[i2] * 2;
    const next3 = uglyNumbers[i3] * 3;
    const next5 = uglyNumbers[i5] * 5;
    const nextUgly = Math.min(next2, next3, next5);

    if (nextUgly === next2) i2++;
    if (nextUgly === next3) i3++;
    if (nextUgly === next5) i5++;

    uglyNumbers.push(nextUgly);
  }

  return uglyNumbers[n - 1];
}

console.log(nthUglyNumber(10)); // 12
console.log(nthUglyNumber(1)); // 1
