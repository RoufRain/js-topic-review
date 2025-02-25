const tarikh = new Date();
// console.log(tarikh);
//simple
const today = new Date();
const date = new Date("2056-12-20");
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2094, 0, 28);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);

const d = new Date(2018);
console.log(d);

//6 numbers specify year, month, day, hour, minute, second:
const d5 = new Date(2018, 11, 24, 10, 33, 30);
// console.log(d5);

//3 numbers specify year, month, and day:
const d2 = new Date(2018, 11, 24);
// console.log(d2);

//When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
const d4 = new Date();
d4.toString();
// console.log(d4);

//The toDateString() method converts a date to a more readable format:
const d3 = new Date();
d3.toDateString();
// console.log(d3);

//JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone
const d7 = new Date();
d7.toString();
console.log(d7);
