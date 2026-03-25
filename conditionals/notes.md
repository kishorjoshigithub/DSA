# Notes on Conditionals

## If/Else

Syntax:

```js
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

Example:

```js
let x = 5;

if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than or equal to 10");
}
```

Note : NaN === NaN is false while isNaN(NaN) is true

Does float works with switch case? -> No Why? -> Because switch case is a statement not an expression so it can't be used in an expression. For example, the following code will not work:

```js
let x = 0.1 + 0.2;

switch (x) {
  case 0.3:
    console.log("x is equal to 0.3");
    break;
  default:
    console.log("x is not equal to 0.3");
    break;
}
```

output: x is not equal to 0.3 as 0.1 + 0.2 = 0.30000000000000004 which is not precisely equal to 0.3
