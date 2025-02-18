//convert inch to feet,miles to kilometere
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const inch = inchToFeet(155);
console.log(inch);

//feet and inch 2part separate
function inchToFeet(number) {
  const feet = parseInt(number / 12);
  const inch = number % 12;
  const result = feet + " ft " + inch + " inch";
  return result;
}
const number = inchToFeet(645);
console.log(number);
