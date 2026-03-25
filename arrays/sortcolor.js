let nums = [2, 0, 1];

let k = nums.length - 1;
let j = 0;
let i = 0;

while (i <= k) {
  if (nums[i] == 0) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j++;
  } else if (nums[i] == 2) {
    [nums[i], nums[k]] = [nums[k], nums[i]];
    k--;
  } else {
    i++;
  }
}

console.log(nums);
