// process.stdout.write("Hello ");
// process.stdout.write("World");

let prompt = require("prompt-sync")();

prompt = prompt("Enter a number");
process.stdout.write(typeof prompt);
process.stdout.write(prompt);
