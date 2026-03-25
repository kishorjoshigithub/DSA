let arr = [1, 2, 3, 4, 5];
let k = 17;
k = k % arr.length;

// for (let i = 0; i < k; i++) {
//   let copy = arr[arr.length - 1];
//   for (let j = arr.length - 1; j > 0; j--) {
//     arr[j] = arr[j - 1];
//   }
//   arr[0] = copy;
// }

// console.log(arr);

// Reversal Algorithm

let temp = new Array(arr.length);

for (let i = arr.length - 1; i >= 0; i--) {
  temp[(i + k) % arr.length] = arr[i];
}
console.log(temp);
