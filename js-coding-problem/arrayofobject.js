const mobile = [
  { phone: "samsung", price: 50000, color: "black" },
  { phone: "redmi", price: 40000, color: "black" },
  { phone: "xaomi", price: 30000, color: "black" },
  { phone: "nokia", price: 55000, color: "black" },
  { phone: "oppo", price: 22000, color: "black" },
];

function getLowPricePhone(mobile) {
  let min = mobile[0];
  for (let phone of mobile) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}
const result = getLowPricePhone(mobile);
console.log(result);
