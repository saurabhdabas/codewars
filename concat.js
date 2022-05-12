// The function should, when given two arrays, concatenate the arrays together.

// let arrOne = [ 0, 3, 1 ];
// let arrTwo = [ 9, 7, 2 ];

const concat = function ( arrOne , arrTwo ) {
  let arr = [] ;
  for ( let i = 0 ; i < arrOne.length ; i ++ ) {
    arr.push(arrOne[i]);
  }
  for ( let j = 0 ; j < arrTwo.length ; j ++ ) {
    arr.push(arrTwo[j]);
  }
  return arr ;
};
concat(arrOne,arrTwo);

