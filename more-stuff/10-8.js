let isNotANumber = function (expression) {
  if (expression * 2) {
    return false
  }
  else {
    return true
  }
}

console.log(isNotANumber(10));
console.log(isNotANumber(0 / 0));
console.log(isNotANumber("Hello"));