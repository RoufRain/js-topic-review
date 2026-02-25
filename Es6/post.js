const postShow = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => displayPost(json));
};

const displayPost = (posts) => {
  const postContainer = document.getElementById("postContainer");
  for (post of posts) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <h4>${post.title}</h4>
        <P>${post.body}</P>
        <h4>${post.id}</h4>
    `;
    postContainer.appendChild(div);
  }
};
