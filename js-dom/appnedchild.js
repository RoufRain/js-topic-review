//add html element using js,createElement,appendChild
const fruitsList = document.getElementById("fruits-ul");
const li = document.createElement("li");
li.innerText = "komola";
fruitsList.appendChild(li);

//add a full section into the body
const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
const h3 = document.createElement("h3");
h3.innerText = "My food list";
section.appendChild(h3);
mainContainer.appendChild(section);

const ul = document.createElement("ul");
section.appendChild(ul);
const li1 = document.createElement("li");
li1.innerText = "pizza";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "coffee";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "pasta";
ul.appendChild(li3);
