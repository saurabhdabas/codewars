// In this exercise we are going to write a function that will return the sum of every whole number from n down to 1: function sumToOne(n)

function sumToOne(n) {
  console.log("n:",n);
  if (n === 1) {
    return 1;
  }
  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));