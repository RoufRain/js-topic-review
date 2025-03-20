//problem 1 -> tax calculator
function calculateTax(income, expenses) {
  // You have to write your code here
  if (income <= 0 || expenses <= 0 || income < expenses) {
    return "invalid input!";
  }
  const remainIncome = income - expenses;
  const tax = remainIncome * 0.2;
  return tax;
}
const tax = calculateTax(-10000, 1120);
console.log(tax);
//problem 3 -> check Digit in string
function checkDigitsInName(str) {
  if (typeof str !== "string") {
    return "invalid input";
  }
  const str2 = str.split(" ");
  const num = "0123456789";
  for (let str2 of str) {
    for (let char of str2) {
      if (num.includes(char)) {
        return true;
      }
    }
  }
  return false;
}
const str = checkDigitsInName("Name");
console.log(str);

//problem 4=> calculate final score of  admission candidate
const obj1 = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true };
const obj2 = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
};

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "invalid input";
  }

  if (obj.testScore <= 50 || obj.schoolGrade <= 25 || obj.isFFamily === true) {
    return true;
  } else return false;
}
const inputObj = calculateFinalScore(obj1);
console.log(inputObj);

//problem 5 calculate interview times
function waitingTime(interviewTimes, serial) {
  if (
    !Array.isArray(interviewTimes) ||
    interviewTimes.length === 0 ||
    typeof serial !== "number" ||
    serial < interviewTimes.length
  ) {
    return "invalid input";
  }
  // Total waiting time for Israt
  let waitingTime = 0;
  for (let i = 0; i < serial - 1; i++) {
    waitingTime += interviewTimes[i % interviewTimes.length];
    //The % (modulo) operator ensures that when i exceeds interviewTimes.length - 1, it wraps around and reuses times cyclically.
  }

  return waitingTime;
}
const interviewTimes = [3, 5, 7, 11, 6]; // Completed interview times
const serial = 10; // Israt's serial

console.log(waitingTime(interviewTimes, serial));
