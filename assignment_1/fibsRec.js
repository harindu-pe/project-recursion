function fibsRec(num) {
  // error check
  if (num < 1 || isNaN(num)) return "Invalid Parameter";

  // base case
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  // recursion
  return [
    ...fibsRec(num - 1),
    fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
  ];
}

console.log(fibsRec(4));
