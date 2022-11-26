const arr = [4, 2, -1, 0, 3, 9, 1, -5, 5, 8];

const findSmallestPositive = (arr) => {
  const sortedArray = arr.sort();
  const arrayOfMissingNumbers = [];
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);
  for(let i = minVal; i < maxVal; i++){
    if(i > 0 && arr.indexOf(i) < 0){
      arrayOfMissingNumbers.push(i);
    }
  }
  if(!arrayOfMissingNumbers.length) return sortedArray[arr.length - 1] + 1;
  return Math.min(...arrayOfMissingNumbers);
}
console.log(findSmallestPositive(arr));