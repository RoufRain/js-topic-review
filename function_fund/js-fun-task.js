/*
Task-1
Take four parameters. Multiply the four numbers and then return the result */
function multiplyFour(num1, num2, num3, num4) {
  const multiplication = num1 * num2 * num3 * num4;
  return multiplication;
}
const value = multiplyFour(5, 2, 5, 2);
console.log(value);

/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.*/
function checkNum(number) {
  if (number % 2 === 1) {
    // console.log("num is even");
    const result = number * 2;
    return result;
  } else {
    // console.log("num is odd");
    const result = number / 2;
    return result;
  }
}
const res = checkNum(6);
console.log(res);

/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/
function make_avg(arr, size) {
  console.log("Array element", arr);

  console.log("Size of array", size);
  if (size === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  avg = sum / size;
  return avg;
}
const arr_element = [5, 2, 10, 5, 6];
const size = arr_element.length;
const result = make_avg(arr_element, size);
console.log("Average of array is", result);

/*
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
function count_zero(str) {
  console.log("string element", str);
  console.log("string size", str.length);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count++;
    }
  }
  return count;
}
const count = count_zero("010101001");
console.log("counted zero in string", count);

/*
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/
function odd_even(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "odd number";
  }
}
const num = odd_even(5);
console.log(num);
