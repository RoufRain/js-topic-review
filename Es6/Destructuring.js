//array destructuring
const val = ["arif", "rohim", "title of names"];
const [name, , title] = val; //if any value is to skip use (, ,)
console.log(name, title);
let [a, b, c] = "d ef";

let user = {};
[user.name, user.surname] = ["John ", "Smith"];
console.log(user.name, user.surname);

//only keys or only values
const person = {
  name: "asdf",
  age: 50,
  address: "ajgfadf",
};
const { name, age, address } = person; //destructuring
console.log(person);
//only values or key
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//We can pass parameters as an object, and the function immediately destructurizes them into variables:
// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// ...and it immediately expands it to variables
function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log(`${title} ${width} ${height}`); // My Menu 200 100
  console.log(items); // Item1, Item2
}
showMenu(options);
//==Nested destructuring
let nestedOption = {
  size: {
    width: 23,
    height: 34,
  },
  items: ["cake", "bread"],
  extra: true,
};
let {
  size: { width, height },
  items: [item1, item2],
} = nestedOption;
console.log(height, item2);

//We can pass parameters as an object, and the function immediately destructurizes them into variables:
let funOption = {
  title: "my menu",
  items: ["itm1,itm2"],
};
//width,height use default value instead use from funOption object
function showFunOption({ title = " ", width = 22, height = 44, items = [] }) {
  console.log(`${title},${height},`);
  console.log(items);
}
showFunOption(funOption);
