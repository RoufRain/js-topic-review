console.log("hello , this is js dom file");
console.log(document.body);
const innerLi = document.getElementsByTagName("li");
for (li of innerLi) {
  console.log(li.innerText);
}
