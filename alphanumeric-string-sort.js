function alphanumericStringSort(str) {
  return str
    .split("")
    .sort((a, b) => {
      const isLetterA = /^[a-zA-Z]$/.test(a);
      const isLetterB = /^[a-zA-Z]$/.test(b);
      const isNumberA = /^[0-9]$/.test(a);
      const isNumberB = /^[0-9]$/.test(b);

      if (isLetterA && !isLetterB) return -1;
      if (!isLetterA && isLetterB) return 1;
      if (isLetterA && isLetterB) {
        if (a.toLowerCase() === b.toLowerCase()) {
          return a.localeCompare(b);
        }
        return a.localeCompare(b, "en", { sensitivity: "base" });
      }
      if (isNumberA && !isNumberB) return -1;
      if (!isNumberA && isNumberB) return 1;
      if (isNumberA && isNumberB) {
        if (a % 2 !== b % 2) {
          return a % 2 === 1 ? -1 : 1;
        }
        return a - b;
      }
      return a.localeCompare(b);
    })
    .join("");
}

console.log(alphanumericStringSort("Matias Jerez 2024")); // "aaeeiJMrstz0224"
