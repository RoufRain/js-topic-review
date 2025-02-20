function avgOddNum(arr) {
  let oddNum = [];

  for (number of arr) {
    if (number % 2 === 1) {
      oddNum.push(number);
    }
  }
  console.log("array element:", oddNum);

  let sum = 0;
  for (number of oddNum) {
    sum = sum + number;
  }

  const count = oddNum.length;
  const avgOfOddNum = sum / count;
  console.log("summation of odd array ", sum +   " array length is:"  count);
  return avgOfOddNum;
}
const arr = avgOddNum([5, 5, 9, 65, 45, 20]);
console.log("average of odd number:", arr);
