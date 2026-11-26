// Find Duplicate using Set

const numbers = [1, 2, 3, 2, 4, 1, 5];

const containDuplicate = (nums) => {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true; // Duplicate found
    }
    seen.add(num);
  }
  return false; // No duplicates found
};

console.log(containDuplicate(numbers)); // true
