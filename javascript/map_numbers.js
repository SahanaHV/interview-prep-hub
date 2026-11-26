const numbers = new Map();

numbers.set(10, 0);
numbers.set(20, 1);
numbers.set(30, 2);

console.log(numbers);
console.log(numbers.get(20)); // 1
console.log(numbers.has(30)); // true
console.log(numbers.has(40)); // false
