function fibs(num) {
  let prev = 0;
  let current = 1;
  let total;
  let array = [0, 1];
  for (let i = 0; i < num - 2; i++) {
    total = prev + current;
    prev = current;
    current = total;
    array.push(total);
  }
  return array;
}

console.log(fibs(8));
