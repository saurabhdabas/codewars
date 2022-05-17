// Make sumItems a function that sums all the numbers in an array. So if you input the array [1, 2, 3, 4, 5], the function will return 15. This will be your base case.

function sum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}

sum([1, 2, 3, 4, 5]);