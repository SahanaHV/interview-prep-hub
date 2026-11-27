let arr = [13, 50, 8, 3, 15, 1];

function findSmallestElement(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallestElement(arr));
