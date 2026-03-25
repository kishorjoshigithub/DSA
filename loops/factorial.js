let num = 5;
let fact = 1;

if (num === 0) {
  console.log("Factorial of 0 is 1");
} else if (num < 0) {
  console.log("Factorial of negative number is not possible");
} else {
  for (let i = num; i > 1; i--) {
    fact *= i;
  }
  console.log("Factorial of " + num + " is " + fact);
}
