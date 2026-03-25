// Math.round(10.5); -> 11
// Math.round(10.3); -> 10

// Math.floor(10.5); -> 10 -> Removes the decimal part

// Math.ceil(10.5); -> 11 -> Rounds up to the next integer
// Math.ceil(10.3); -> 11 -> Rounds up to the next integer

// Math.trunc(10.5); -> 10 -> Removes the decimal part
Math.trunc(10.3); // 10

Math.pow(2, 3); // 2^3 = 8

Math.sqrt(9); // 3 -> Square root of a number

Math.cbrt(64); // 4 -> Cube root of a number

Math.abs(-10); // 10 -> Absolute value of a number

Math.max(10, 20); // 20 -> Maximum of two numbers
Math.min(10, 20); // 10 -> Minimum of two numbers

console.log(Math.floor(Math.random() * 9000));

// let a = 89.83727;

console.log(a.toFixed(2)); // 89.84 -> It returns string with 2 decimal places

// Q1 : Canculate area and parameter of rectangle

let x = 10;
let y = 20;

console.log(x * y); // 200
console.log(2 * (x + y)); // 40

// Q2 : Area of triangle by using Heron's formula

let a = 10;
let b = 20;
let c = 30;

function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

console.log(areaOfTriangle(a, b, c)); // 60

//Q3 : Circumference of circle
let r = 10;

function circumference(r) {
  return 2 * Math.PI * r;
}

console.log(circumference(r)); // 62.83185307179586
