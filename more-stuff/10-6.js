let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex) {
  let matches = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (regex.test(arr[i])) {
      matches.push(arr[i]);
    }
  }

  return matches;
}
console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']