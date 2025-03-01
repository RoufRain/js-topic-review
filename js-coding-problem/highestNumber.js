const numbers = [1, 25, 3, 1, 4, 75, 69, 44];
function getMax(number) {
  let max = number[0];
  for (let num of number) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const res = getMax(numbers);
console.log(res);
