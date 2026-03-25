let height = [4, 2, 0, 3, 2, 5];

let n = height.length;
let left = new Array(n);
let right = new Array(n);

// Fill left max array
let maxLeft = height[0];
left[0] = maxLeft;

for (let i = 1; i < n; i++) {
  maxLeft = Math.max(height[i], maxLeft);
  left[i] = maxLeft;
}

// Fill right max array
let maxRight = height[n - 1];
right[n - 1] = maxRight;

for (let i = n - 2; i >= 0; i--) {
  maxRight = Math.max(height[i], maxRight);
  right[i] = maxRight;
}

// Calculate trapped water
let ans = 0;

for (let i = 0; i < n; i++) {
  ans += Math.min(left[i], right[i]) - height[i];
}

console.log(ans); // Output: 9
