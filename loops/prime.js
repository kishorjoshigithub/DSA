let num = 7;
let isPrime = true;

if (num > 1) {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime === false) {
  console.log(`${num} is not a prime number`);
} else {
  console.log(`${num} is a prime number`);
}

// 2nd solution

function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}
