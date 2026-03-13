console.log("hello 1");
console.log("hello 2");
console.log("hello 3");
// setInterval(() => {
//   console.log("i am from setInterval");
// }, 2000);
let count = 0;
const cId = setInterval(() => {
  count++;
  console.log(count);
  if (count >= 5) {
    clearInterval(cId);
  }
}, 2000);
console.log("hello 4");
