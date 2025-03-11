const products = [
  { id: 1, name: "walton phone", price: 15000 },
  { id: 2, name: "macbook air", price: 150000 },
  { id: 3, name: "iphone", price: 10000 },
  { id: 4, name: "xaomi phone", price: 15000 },
  { id: 5, name: "walton fan", price: 15000 },
];

function matchProduct(products, search) {
  let arr = [];
  for (product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      arr.push(product);
    }
  }
  return arr;
}
const res = matchProduct(products, "Phone");
console.log(res);
