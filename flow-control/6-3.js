let evenOrOdd = function(num) {
  if (Number.isInteger(num) && num % 2 === 0) {
    console.log("even");
  }
  else if (Number.isInteger(num) && num % 2 !== 0) {
    console.log("odd");
  }
  else {
    console.log("whoops")
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(3.12);