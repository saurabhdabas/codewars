const arr = [1,2,5,6,4,3,8,10];
const minNum = Math.min(...arr);
const maxNum = Math.max(...arr);

const findMissing = (arr) => {
  for(let i = minNum; i < maxNum; i++){
    if(!arr.includes(i+1)){
      console.log(i+1);
    }
  }
};

findMissing(arr);