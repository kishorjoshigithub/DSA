let str = "madams";

let i = 0;
let j = str.length - 1;
let isPalindrome = true;

while (i < j) {
  if (str.charAt(i) !== str.charAt(j)) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}

if (isPalindrome) {
  console.log(`Yes ${str} is a palindrome string`);
} else {
  console.log(`No ${str} is not a palindrome string`);
}
