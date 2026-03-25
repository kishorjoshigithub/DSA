let nums = [2, 2, 1, 1, 1, 2, 2];

let max = nums[0];
let count = 1;

let i = 1;

while (i < nums.length) {
  if (count == 0) {
    max = nums[i];
    count = 1;
  } else if (nums[i] == max) {
    count++;
  } else {
    count--;
  }
  i++;
}

console.log(max);
