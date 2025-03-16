//handle on click using addEventListener in diff way
//option1
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", makeGreen);
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

//option 2 directly use [and mostly use]
document.getElementById("make-purple").addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
});
