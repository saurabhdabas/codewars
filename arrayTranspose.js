// Finding Transpose of a 2D Matrix.


const transpose = function(){
  let transposedArray =[];
for(let i = 0 ; i < arr[0].length ;  i ++ ){  // we want i to loop till the length of element in array , not length of the array ;
  let subArr =[];
  for(let j = 0 ; j < arr.length ; j ++){
    subArr.push(arr[j][i]);
  }
  console.log(subArr);
  transposedArray.push(subArr);
}
console.log(transposedArray);
return transposedArray ;
}

transpose(arr);

// const arr = [ [1,2,3],[4,5,6],[7,8,9]];
// const arr = [ [1,2],[4,5],[7,8]];