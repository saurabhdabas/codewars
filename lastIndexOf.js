// When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

const lastIndexOf = (arr,elem) => {
  let arrOfIndices=[];
  if(arr.length === 0){
    return -1;
  } else {
    for(let i = 0; i < arr.length ; i++){
      if(arr[i] === elem){
        arrOfIndices.push(i)
      }
      else if (!arr.includes(elem)){
        return -1;
      }
    }
    return arrOfIndices.pop();
  }

}

// lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	3
// lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	4
// lastIndexOf([ 0, 1, 4, 1, 2 ], 3);	-1
// lastIndexOf([ 5, 5, 5 ], 5);	       2
// lastIndexOf([], 3);	                -1
