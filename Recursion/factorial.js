function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(5); // 120
factorial(1); // 1
factorial(0); // 1