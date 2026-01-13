//object use for in,for of
let person = {
  name: "abul",
  address: "chander des",
  phone: 212,
};
//for in loop
//for in loop directly work on object,where for of loop dont
for (let key in person) {
  console.log(key, `${person[key]}`);
}
//for of
for (let key of Object.entries(person)) {
  console.log(key);
}
