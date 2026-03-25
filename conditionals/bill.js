let unit = 700;
let amountToBePaid = 0;

if (unit > 400) {
  amountToBePaid += (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amountToBePaid += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amountToBePaid += (unit - 100) * 6;
  unit = 100;
}
if (unit > 0 && unit <= 100) {
  amountToBePaid += (unit - 0) * 4;
  unit = 0;
}

console.log(amountToBePaid);
