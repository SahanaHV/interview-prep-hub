/* 
A Set stores unique values only.

If you try to insert the same value multiple times, it keeps only one copy.
*/

const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(10); // Duplicate value, will not be added

console.log(numbers); // Set(3) { 10, 20, 30 }
