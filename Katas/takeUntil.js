// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil = (arr,callback) => {
  let newArr = [];
  for(let i = 0 ; i < arr.length ; i++) {
    if(callback(arr[i])){
      newArr.push(arr[i]);
    } else {
      return newArr;
    }
  };
  return newArr;
};

const callback = (x) => {
  if(x > 0){
    return true;
  }
}

console.log(takeUntil(data1,callback));