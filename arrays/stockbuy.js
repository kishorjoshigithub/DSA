let prices = [7, 1, 5, 3, 6, 4];

let maxprofit = 0;
let min = prices[0];

for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min) {
    min = prices[i];
  }

  if (prices[i] - min > maxprofit) {
    maxprofit = prices[i] - min;
  }
}
console.log(maxprofit);
