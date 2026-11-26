/*
  A Map stores data in key-value pairs.

  Think of it like a dictionary:
  - Key = Identifier
  - Value = Data associated with that key
*/

const student = new Map();

// 1. set() - Add key-value pair
student.set('name', 'Sahana');
student.set('age', 25);
student.set('course', 'JavaScript');

console.log(student);

// 2. get() - Get value using key
console.log(student.get('name')); // Sahana

// 3. has() - Check whether key exists
console.log(student.has('age')); // true

// 4. delete() - Remove a key
student.delete('age');

// 5. size - Get total number of entries
console.log(student.size); // 2

// 6. clear() - Remove all entries
student.clear();

console.log(student.size); // 0
