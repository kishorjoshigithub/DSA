let num = 145;
let sum = 0;

while (num > 0) {
  let digit = num % 10;
  let fact = 1;
  for (let i = 1; i <= digit; i++) {
    fact = fact * i;
  }
  sum = sum + fact;
  num = Math.floor(num / 10);
}
