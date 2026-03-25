// 1st Methon

let a = 10;
let b = 20;

// let temp = a;
// a = b;
// b = temp;

// console.log("Result of swap 1st method : ", a, b);

// 2nd Method

a = a + b;
b = a - b;
a = a - b;

console.log("Result of swap 2nd method : ", a, b);

// 3rd Method

[a, b] = [b, a];
console.log(a, b);
