const arr = [[1,2],[3,4],[5,6]];


const matrixTranspose = (arr) => {
  let transpose = [];
  for(let i = 0; i < arr[0].length; i ++) {
    let newRow = [];
    for ( let j = 0; j < arr.length ; j++) {
      newRow.push(arr[j][i])
    }
    transpose.push(newRow);
  }
  return transpose;
}
console.log(matrixTranspose(arr));
