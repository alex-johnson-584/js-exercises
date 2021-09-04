let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

let checkforThree = function (arr) {
  let newArr = arr.filter(num => num ===3)
  if (newArr.length >= 1) {
    return true;
  }
  else {
    return false;
  }
}
