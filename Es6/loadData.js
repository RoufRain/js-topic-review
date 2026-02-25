function loadData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => loadUsers(json));
}

const loadUsers = (users) => {
  const dataContainer = document.getElementById("dataList");
  for (user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    dataContainer.appendChild(li);
  }
};
