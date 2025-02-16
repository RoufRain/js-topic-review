//return only even number
function evenOnly(numbers) {
  let evens = [];
  for (number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  return evens;
}
const value = [3, 4, 5, 65, 6];
console.log(evenOnly(value));

//sum of even number
function sumEvenNums(number) {
  let sum = 0;
  for (element of number) {
    if (element % 2 === 0) {
      sum = sum + element;
    }
  }
  return sum;
}
const values = [3, 4, 5, 65, 6];
console.log(sumEvenNums(values));
