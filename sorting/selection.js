let nums = [10, 5, 1, 12, 9];
let n = nums.length;

for (let i = 0; i < n - 1; i++) {
  let minIndex = i;
  for (j = i + 1; j < n; j++) {
    if (nums[j] < nums[minIndex]) {
      minIndex = j;
    }
  }

  if (minIndex != i) {
    let temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }
}

console.log(nums);
