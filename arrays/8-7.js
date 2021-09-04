let array = [3, 5, 7];
let sumOfSquares = function(arr) {
  return arr.reduce((accumulator, element) => accumulator + element * element, 0)
}
console.log(sumOfSquares(array)); // => 83