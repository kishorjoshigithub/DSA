let arr = [4, 8, 7, 2, 1, 5, 6, 3];

// Use cyclic sort when it's the number of sequential numbers from 1 to n
let i = 0;
while (i < arr.length) {
  let correct = arr[i] - 1;

  if (arr[i] != arr[correct] && arr[i] > 0 && arr[i] <= arr.length) {
    swap(arr, i, correct);
  } else {
    i++;
  }
}

console.log(arr);

function swap(arr, i, correct) {
  let temp = arr[i];
  arr[i] = arr[correct];
  arr[correct] = temp;
}
