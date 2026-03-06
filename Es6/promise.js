const fetchData = () => {
  return new Promise((resolve, reject) => {
    const res = true;
    if (res) {
      // resolve({ name: "mr x" });
      const mockData = {
        json: () => Promise.resolve({ name: "mr. x" }),
      };
      resolve(mockData);
    } else {
      reject("server error");
    }
  });
};
fetchData()
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
