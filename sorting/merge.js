let arr = [12, 31, 8, 32, 17];

let result = mergeSort(arr, 0, arr.length - 1);

console.log(arr);

function mergeSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let temp = new Array(end - start + 1);
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= end) {
    temp[k++] = arr[j++];
  }
  // Copy the merged elements back to the original array
  for (let i = 0; i < temp.length; i++) {
    arr[start + i] = temp[i];
  }
}
