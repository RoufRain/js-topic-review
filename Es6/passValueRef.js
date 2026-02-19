//pass by value => কারণ function এ a এর copy গেছে।
//Original a পরিবর্তন হয়নি।
let a = 10;
function changeValue(x) {
  x = 20;
  console.log("Inside function:", x);
}
changeValue(a);
console.log("Outside function:", a);

//pass by reference => কারণ এখানে object এর reference গেছে।
//Function এর ভিতরে change করলে original object change হয়ে যায়।
let person = {
  name: "Rouf",
};

function changeName(obj) {
  obj.name = "Karim";
}

changeName(person);

console.log(person.name);
/**
 * JavaScript এ technically সবসময় pass by value হয়।

কিন্তু —
Object এর ক্ষেত্রে reference এর copy pass হয়।

মানে:

Primitive → value copy

Object → reference copy
 */
