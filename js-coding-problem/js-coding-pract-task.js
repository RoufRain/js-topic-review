/*1. find You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5 output:2 */
let findNum = 5;
function countNumber(numbers) {
  let count = 0;
  for (number of numbers) {
    if (number === findNum) {
      count++;
    }
  }
  return count;
}
const numbers = [1, 2, 5, 3, 5, 5, 4, 5];
console.log(countNumber(numbers));
/**Write a function to count the number of vowels in a string. */
function countVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (number of string) {
    if (vowels.includes(number)) {
      count++;
    }
  }
  return count;
}
const string = "count the number of vowels in a";
console.log(countVowels(string));
/**Write a function to find the longest word in a given string. */
function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = " ";
  for (word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
let str = "I am learning Programming to become a programmer";
let findWord = findLongestWord(str);
console.log(findWord);
