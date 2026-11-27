// Reverse An Array

let arr = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  let temp = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  return temp;
}

console.log(reverseArray(arr));
