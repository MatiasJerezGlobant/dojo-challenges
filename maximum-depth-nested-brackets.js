function findDeepestSubstrings(str) {
  let maxDepth = 0,
    currentDepth = 0;
  const stack = [];
  const deepestSubstrings = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (str[i] === ")") {
      const start = stack.pop();
      currentDepth--;
      if (currentDepth + 1 === maxDepth) {
        deepestSubstrings.push(str.substring(start + 1, i));
      }
    }
  }

  return deepestSubstrings.length > 0 ? deepestSubstrings : [str];
}

console.log(findDeepestSubstrings("AA(XX((YY))(U))")); // ["YY"]
