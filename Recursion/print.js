function print(n) {
  console.log("Hello world");
  n--;
  if (n > 0) {
    print(n);
  }
}

print(5);
