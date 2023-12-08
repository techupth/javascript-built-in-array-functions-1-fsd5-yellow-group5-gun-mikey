let words = ["apple", "cat", "dog", "elephant"];

const get5CharWords = (words) => words.filter((word) => word.length >= 5);

console.log(get5CharWords(words));

// console.log(get5CharWords(words)); // Output: ["apple", "elephant"]
