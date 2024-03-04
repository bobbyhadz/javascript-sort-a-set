// EXAMPLE 1 - Sort a Set in JavaScript

// ✅ Sort a Set containing Strings

const set1 = new Set(['c', 'b', 'a']);

const sortedArray = Array.from(set1).sort();
console.log(sortedArray); // 👉️ ['a', 'b', 'c']

const sortedSet = new Set(sortedArray);
console.log(sortedSet); // 👉️ {'a', 'b', 'c'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function sortStringSet(set) {
//   const sortedArray = Array.from(set).sort();

//   const sortedSet = new Set(sortedArray);

//   return sortedSet;
// }

// // 👇️ Set(3) { 'a', 'b', 'c' }
// console.log(sortStringSet(new Set(['c', 'b', 'a'])));

// // 👇️ Set(3) { 'a', 'c', 'z' }
// console.log(sortStringSet(new Set(['c', 'z', 'a'])));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Sort a Set using spread syntax (...)

// // ✅ Sort a Set object that contains strings
// const set1 = new Set(['c', 'b', 'a']);

// const sortedArray = [...set1].sort();
// console.log(sortedArray); // 👉️ [ 'a', 'b', 'c' ]

// const sortedSet = new Set(sortedArray);
// console.log(sortedSet); // 👉️ {'a', 'b', 'c'}
