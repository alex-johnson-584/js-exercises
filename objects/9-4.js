let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upperKeys = Object.keys(obj)
let toUpper = upperKeys.map((key) => key.toUpperCase())

console.log(toUpper);