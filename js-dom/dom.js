console.log("hello , this is js dom file");
console.log(document.body);
const innerLi = document.getElementsByTagName("li");
for (li of innerLi) {
  console.log(li.innerText);
}

const place = document.getElementById("place-title");
console.log(place);

const placeName = document.getElementsByClassName("place-name");

for (let place of placeName) {
  console.log(place.innerText);
}
