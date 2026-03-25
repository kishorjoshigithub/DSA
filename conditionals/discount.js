let amount = 5000;
let discount = 0;

if (amount > 0 && amount <= 1000) {
  const paybleAmount = amount - Math.floor((amount * 0) / 100);
  console.log(paybleAmount);
} else if (amount > 1000 && amount <= 5000) {
  const paybleAmount = amount - Math.floor((amount * 10) / 100);
  console.log(paybleAmount);
} else {
  const paybleAmount = amount - Math.floor((amount * 20) / 100);
  console.log(paybleAmount);
}
