let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i + j == n + 1 || i == j) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
