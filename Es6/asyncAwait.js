async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error caught:", error);
  }
}

getUser();
// try {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((res) => re.json())
//     .then((res) => console.log(res));
// } catch {
//   console.log("error caught");
// } here catch do not work ,on .then try...catch do not work
