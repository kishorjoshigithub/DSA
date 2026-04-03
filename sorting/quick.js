let arr = [12, 31, 8, 32, 17];

let result = quickSort(arr, 0, arr.length - 1);

console.log(arr);

function findPivotIndex(arr, start, end) {
  let pivot = arr[start];
  let i = start + 1;
  let j = end;

  while (i <= j) {
    while (i <= j && arr[i] < pivot) {
      i++;
    }
    while (i <= j && arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, start, j);
  return j;
}

function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let pivotIndex = findPivotIndex(arr, start, end);

  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
