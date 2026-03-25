// Math.floor(10.5); -> 10

// let a = 12;
// let b = 22;

// console.log(Math.floor(a / b));

// %

let c = 10;
let d = 5;

// console.log(c % d); // 0 as remainder is 0 when 10 is divided by 5
// console.log(d % c); // 5 as remainder is 5 when 5 is divided by 10

//Operators

// Arithmatic Operators -> + - * / %
// Comparison Operators -> == != < > <= >=
// Logical Operators -> && || !
// Bitwise Operators -> & | ~ ^ << >> >>>
// Assignment Operators -> = += -= *= /= %= &= |= ^= <<= >>= >>>=
// Ternary Operators -> condition ? true : false
// Unary Operators -> ++ -- + - !

let m = 20;
console.log(m++); // 20 but m is 21 now and will be 21 only from the next line.
console.log(m); // 21

//Post increment -> use the value as it is and then increment it
console.log(m++); // 21 and m is 22 now

let a = 10;
let b = a++; // b=10 and a's value got incremented to 11
console.log(a, b); // 11 10

let i = 11;
i = i++ + ++i; // 11+13 = 24

// let k = 11++;
// console.log(k); -> Error : 11++ is not a valid expression as you can not use unary operator on a constant
