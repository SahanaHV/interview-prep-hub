// Remove duplicate values from an array

const numbers = [1, 2, 3, 2, 4, 1, 5];

const uniqueNumbers = new Set(numbers);
// Convert Set back to an array
const uniqueArray = Array.from(uniqueNumbers);
console.log(uniqueArray); // [1, 2, 3, 4, 5]

// -----------------------------------------------------------
// Alternative1 method using filter() and indexOf()
const uniqueArray2 = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray2); // [1, 2, 3, 4, 5]

// -----------------------------------------------------------
// Alternative2 method using reduce()
const uniqueArray3 = numbers.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray3); // [1, 2, 3, 4, 5]

// -----------------------------------------------------------
// Alternative3 method using spread operator and Set
const uniqueArray4 = [...new Set(numbers)];
console.log(uniqueArray4); // [1, 2, 3, 4, 5]

// -----------------------------------------------------------
// Alternative4 method using forEach() and includes()
const uniqueArray5 = [];
numbers.forEach((value) => {
  if (!uniqueArray5.includes(value)) {
    uniqueArray5.push(value);
  }
});
console.log(uniqueArray5); // [1, 2, 3, 4, 5]
