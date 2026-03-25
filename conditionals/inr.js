let amount = 5381;

if (amount >= 500) {
  let fivenotes = Math.floor(amount / 500);
  console.log("number of notes of 500 is " + fivenotes);
  amount = amount % 500;
}
if (amount >= 200) {
  let twonotes = Math.floor(amount / 200);
  console.log("number of notes of 200 is " + twonotes);
  amount = amount % 200;
}
if (amount >= 100) {
  let onenote = Math.floor(amount / 100);
  console.log("number of notes of 100 is " + onenote);
  amount = amount % 100;
}
if (amount >= 50) {
  let halfnote = Math.floor(amount / 50);
  console.log("number of notes of 50 is " + halfnote);
  amount = amount % 50;
}
if (amount >= 20) {
  let quarternote = Math.floor(amount / 20);
  console.log("number of notes of 20 is " + quarternote);
  amount = amount % 20;
}
if (amount >= 10) {
  let eighthnote = Math.floor(amount / 10);
  console.log("number of notes of 10 is " + eighthnote);
  amount = amount % 10;
}
if (amount >= 1) {
  let eighthnote = Math.floor(amount / 1);
  console.log("number of notes of 1 is " + eighthnote);
}
