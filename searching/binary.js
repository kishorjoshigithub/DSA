let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];
let target = 67;

let index = binarySearch(arr, 0, arr.length, target);

if (index == -1) {
  console.log("not found");
} else {
  console.log("Target found at : " + index);
}

function binarySearch(arr, first, last, target) {
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      last = mid - 1;
    } else first = mid + 1;
  }
  return -1;
}
