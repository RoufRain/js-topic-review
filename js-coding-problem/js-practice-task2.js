/*const numbers = [167, 190, 120, 165, 137];
function getMax(number) {
  let min = number[0];
  for (let num of number) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
const res = getMax(numbers);
console.log(res);*/
function findSmallestName(names) {
  let shortName = names[0];
  for (name of names) {
    if (name.length < shortName.length) {
      shortName = name;
    }
  }
  return shortName;
}
const names = ["rahim", "robin", "rafi", "ron", "rashed"];
console.log("smallest name is:", findSmallestName(names));
//
function calculateElectronicsBudget(laptopQ, tabletsQ, mobileQ) {
  let laptop = 35000;
  let tablet = 15000;
  let mobile = 20000;
  let sum = laptop * laptopQ + tablet * tabletsQ + mobile * mobileQ;
  return sum;
}
const items = calculateElectronicsBudget(2, 1, 3);
console.log(items);
//
function findAveragePhonePrice(phones) {
  let totalPrice = 0;
  for (phone of phones) {
    totalPrice += phone.price;
  }
  return totalPrice / phones.length;
}
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
const avgPricePhone = findAveragePhonePrice(phones);
console.log(avgPricePhone);
