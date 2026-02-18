function cBackFun(value) {
  console.log("hello " + value);
}
function fun(callback) {
  const name = "rouf";
  callback(name);
}
fun(cBackFun);
//-------------practice

function multiply(x, y) {
  return x * y;
}
function calculate(a, b, operation) {
  return operation(a, b);
}
console.log(calculate(3, 5, multiply));
//---------taking parameter array
function arr(num) {
  console.log(num * 2);
}
function myForEach(a, callback) {
  for (i = 0; i < a.length; i++) {
    callback(a[i], i, a);
  }
}
myForEach([1, 3, 5], arr);
//------check result
function checkResult(score, callback) {
  if (score >= 40) {
    return console.log("pass");
  } else {
    return console.log("fail");
  }
}
function result(number, call) {
  call(number);
}
result(35, checkResult);
//---
const processPrice = (price, callback) => {
  return callback(price);
};

const applyDiscount = (price) => {
  return price - price * 0.1; // 10% discount
};

const addTax = (price) => {
  return price + price * 0.15; // 15% tax
};

console.log(processPrice(1000, applyDiscount)); // 900
console.log(processPrice(1000, addTax));
