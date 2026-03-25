let nums1 = [2, 5, 6];
let m = 3;
let nums2 = [1, 3, 4, 8];
let n = 4;

// let temp = new Array(m + n);
// let i = (j = k = 0);

// while (i < nums1.length && j < nums2.length) {
//   if (nums1[i] < nums2[j]) {
//     // temp[k] = nums1[i];
//     // k++;
//     // i++

//     temp[k++] = nums1[i++];
//   } else {
//     // temp[k] = nums2[j];
//     // k++;
//     // j++;
//     temp[k++] = nums2[j++];
//   }
// }

// while (j < nums2.length) {
//   temp[k++] = nums2[j++];
// }
// while (i < nums1.length) {
//   temp[k++] = nums1[i++];
// }

// console.log(temp);

nums1.length = m + n;

let i = m - 1;
let j = n - 1;
let k = m + n - 1;

while (i >= 0 && j >= 0) {
  if (nums1[i] < nums2[j]) {
    nums1[k--] = nums2[j--];
  } else {
    nums1[k--] = nums1[i--];
  }
}

while (j >= 0) {
  nums1[k--] = nums2[j--];
}

while (i >= 0) {
  nums1[k--] = nums1[i--];
}

console.log(nums1);
