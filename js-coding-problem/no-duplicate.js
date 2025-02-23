const array = [4, 4, 5, 6, 7, 5, 3, 3];
function noDuplicate(arr) {
  const unique = [];
  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqeArray = noDuplicate(array);
console.log(uniqeArray);
