let phones = [
    {id:1,name:"iphone",color:"black",price:150000},
    {id:2,name:"samsung",color:"blue",price:50000},
    {id:3,name:"xiaomi",color:"green",price:30000},
    {id:4,name:"nokia",color:"blue",price:20000},
    {id:5,name:"oppo",color:"gold",price:10000}

]
// console.log(products);
const newProduct = phones.forEach(product=>{
    console.log(product);
})
//filter
const newProduct2 = phones.filter(product=>product.price<30000&&product.price>10000);
console.log(newProduct2);
//find
const productFind = phones.find(product=>product.color === "green");
console.log(productFind);

//---------------------------practice problem
const products = [
    { id: 1, name: "Laptop", price: 80000, category: "electronics", inStock: true },
    { id: 2, name: "Phone", price: 30000, category: "electronics", inStock: false },
    { id: 3, name: "Shirt", price: 1500, category: "fashion", inStock: true },
    { id: 4, name: "Watch", price: 5000, category: "fashion", inStock: false },
    { id: 5, name: "Headphone", price: 2000, category: "electronics", inStock: true }
  ];
//1
const prob1=products.find(p=>p.id===3);
console.log(prob1);  
//2
const prob2=products.filter(p=>p.inStock===true);
console.log(prob2);
//3
const prob3=products.filter(p=>p.category==="electronics");
console.log(prob3);
//4
const prob4=products.filter(p=>p.category==="electronics"&&p.inStock===true);
console.log(prob4);
//6
const prob6=products.filter(p=>p.price>5000).map(p=>p.name);
console.log(prob6);
//7 exp=>some() যদি অন্তত একটা element condition satisfy করে → true ,না করলে → false
const prob7=products.some(p=>p.price>100000);
console.log(prob7);
//8 every() check করে সবগুলো element condition satisfy করছে কিনা। যদি সব product inStock === true হয় → true যদি একটাও false হয় → false
const prob8=products.every(p=>p.inStock===true);
console.log(prob8);
//9
//its not proper way
function getProductByCategory(categoryName){
    const cName = products.filter(c=>c.category === categoryName);
    return cName;
}
console.log(getProductByCategory("fashion"));
//-----proper way
function getProductByCategory(categoryName){
    return products.filter(c=>c.category.toLowerCase() === categoryName.toLowerCase());
    
}
console.log(getProductByCategory("fashion"));
//10 backend style(return filtered value)
function getAvailableElectronics(){
  return products.filter(p=>p.category==="electronics"&&p.inStock&&p.price>1000);
}
console.log(getAvailableElectronics());