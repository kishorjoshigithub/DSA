// let str = "Kishor";

// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev = rev.concat(str[i]);
// }
// console.log(rev);

let s = ["h", "e", "l", "l", "o"];

let j = s.length - 1;
let i = 0;

while (i < j) {
  let temp = s[i];
  s[i] = s[j];
  s[j] = temp;
  i++;
  j--;
}

console.log(s);
