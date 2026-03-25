let arr = [24, 35, 6, 76, 98];

// With Extra Space;

// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// }
// console.log(temp);

// without extra space

// let i = 0,
//   j = arr.length - 1;

// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;

//   i++;
//   j--;
// }

let j = arr.length - 1;

for (let i = 0; i < j; i++, j--) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(arr);
