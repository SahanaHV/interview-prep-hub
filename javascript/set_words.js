const fruits = new Set();

// 1. add() - Add a value
fruits.add('apple');
fruits.add('banana');
fruits.add('orange');
fruits.add('apple'); // Duplicate value, will not be added

console.log(fruits); // Set(3) { 'apple', 'banana', 'orange' }

// 2. has() - Check if value exists
console.log(fruits.has('apple')); // true
console.log(fruits.has('Mango')); // false

// 3. delete() - Remove a value
fruits.delete('banana');

// 4. size - Count unique values
console.log(fruits.size); // 2

// 5. clear() - Remove all values
fruits.clear();

console.log(fruits.size); // 0
