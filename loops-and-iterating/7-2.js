let factorial = function (num) {
  let result = num;
  for (let n = num - 1; n > 0; n--) {
    result *= n;
  }
  return result;
}

console.log(factorial(5));