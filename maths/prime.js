let n = 30;
let arr = new Array(n).fill(true);

arr[0] = arr[1] = false;

for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
  if (arr[i]) {
    for (let j = i * i; j < n; j += i) {
      arr[j] = false;
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    process.stdout.write(i + " ");
  }
}
