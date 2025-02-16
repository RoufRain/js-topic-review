//using for loop
function sumOfArray(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sumOfArray([3, 4, 5, 6, 6]));
//using for of loop
function sumOfArray(array) {
  let sum = 0;
  for (numbers of array) {
    sum = sum + numbers;
  }
  return sum;
}
console.log(sumOfArray([3, 4, 5, 6, 6]));
