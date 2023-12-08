let words = ["hello", "world"];

// function getWordLengths(words) {
//   // Start coding here
//   return words.map((word) => word.length);
// }

const getWordLengths = (words) => words.map((word) => word.length);

const result = getWordLengths(words);

console.log(getWordLengths(words)); // Output: [5, 5]
