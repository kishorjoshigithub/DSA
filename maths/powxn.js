let x = 2;
let n = 5;

function myPow(x, n) {
  if (n === 0) return 1;
  let ans = myPow(x, parseInt(n / 2));
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 === 0) {
    return ans * ans;
  } else {
    return ans * ans * x;
  }
}

let result = myPow(x, n);
console.log(result);
