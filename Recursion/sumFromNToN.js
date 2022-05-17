// This is a JavaScript project that contains a starting point for you to implement a recursive algorithm.

function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if(fromN === toN) {
    return toN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
}
console.log(sum(3, 7));