let arr = [24, 35, 6, 76, 98, 66, 94, 98];

let max = Math.max(arr[0], arr[1]);
let secmax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    secmax = max;
    max = arr[i];
  } else if (arr[i] > secmax && arr[i] !== max) {
    secmax = arr[i];
  }
}

console.log("Second Max is : ", secmax);
