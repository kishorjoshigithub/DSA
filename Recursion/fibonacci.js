// function series(n, first, second) {
//   if (n == 0) return;
//   let third = first + second;
//   process.stdout.write(third + " ");
//   series(n - 1, second, third);
// }
// let n = 10;
// process.stdout.write(0 + " " + 1 + " ");
// series(n - 2, 0, 1);

let n = 5;

function fibo(n) {
  if (n == 0 || n == 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(n));
