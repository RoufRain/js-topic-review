const products = [
  { name: "shirt", price: 500, quantity: 5 },
  { name: "pant", price: 900, quantity: 3 },
  { name: "coat", price: 1200, quantity: 1 },
  { name: "shari", price: 5000, quantity: 2 },
];
function shoppingCartTotal(products) {
  sum = 0;
  for (product of products) {
    sum += product.price * product.quantity;
  }
  return sum;
}
const total = shoppingCartTotal(products);
console.log("total", total);
