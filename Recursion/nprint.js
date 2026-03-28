print(5);

function print(n) {
  if (n > 1) {
    print(n - 1);
  }
  console.log(n);
}
