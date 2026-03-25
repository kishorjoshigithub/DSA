let prompt = require("prompt-sync")();

let n = prompt("Enter the number");
let rows = 1;
if (n > 0) {
  rows = prompt("Enter number of rows");
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}
