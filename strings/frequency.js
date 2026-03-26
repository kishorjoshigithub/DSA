let str = "geeksforgeeks";
let arr = new Array(128).fill(0);

// Count frequency
for (let i = 0; i < str.length; i++) {
  arr[str.charCodeAt(i)]++;
}

// Maintain order
let seen = new Array(128).fill(false);

for (let i = 0; i < str.length; i++) {
  let index = str.charCodeAt(i);
  if (!seen[index]) {
    // result += str[i] + arr[index] + " ";
    console.log(`${str[i]} occurs ${arr[index]} times`);
    seen[index] = true;
  }
}

// console.log(result.trim());
