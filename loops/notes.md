#Loops

- Loops are used to execute a block of code multiple times.

## For Loop

- Used when you know till how many times you want to execute a block of code.

```js
for(let i=0; i<20;i++>){
    console.log(i);
}
```

## While Loop

- Used when you want to execute a block of code until a condition is met.

```js
let i = 0;
while (i < 20) {
  console.log(i);
  i++;
}
```

## Do While Loop

- Used when you want to execute a block of code at least once.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 20);
```

## Break

- Used to break out of a loop.

```js
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    break;
  }
  console.log(i);
}
```

## Continue

- Used to skip the rest of the code in a loop and move to the next iteration.

```js
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
  }
  console.log(i);
}
```

## Switch

- Used to execute a block of code based on the value of a variable.

```js
let i = 10;
switch (i) {
  case 10:
    console.log("i is 10");
    break;
  case 20:
    console.log("i is 20");
    break;
  default:
    console.log("i is not 10 or 20");
}
```

Strong Number is a number which is equal to the sum of factorials of it's digits.
