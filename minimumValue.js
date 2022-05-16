// we're going to write code that finds the smallest value in a list of numbers.


const min = (list) => {
  let min = Infinity;
  for(let i = 0; i < list.length ; i++) {
    if(list[i] < min) {
      min = list[i]
    }
  }
  return min;
}

console.log(min([1,2,3,4,5,6,0,9,-1]));