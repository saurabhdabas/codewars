// create our own version of map in order to get some practice building our own higher-order functions.

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}