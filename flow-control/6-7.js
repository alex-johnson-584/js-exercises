let upperCase = function (string) {
  if (string.length > 10) {
    return string.toUpperCase();
  }
  else {
    return string;
  }
}

console.log(upperCase("dog"))
console.log(upperCase("the large dog"))
console.log(upperCase(8))