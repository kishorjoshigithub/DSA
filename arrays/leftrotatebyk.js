let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;
// console.log(k);

// for (let i = 0; i < k; i++) {
//   let copy = arr[0];
//   for (let j = 0; j < arr.length; j++) {
//     arr[j] = arr[j + 1];
//   }
//   arr[arr.length - 1] = copy;
// }

// console.log(arr);

// Using Temporary Array

// let temp = new Array(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }

// console.log(temp);

// ( Reversal Algorithm)

reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);
console.log(arr);
function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
