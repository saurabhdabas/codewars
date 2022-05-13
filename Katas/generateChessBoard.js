// Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.
/* [
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
*/

// Generate a chessboard

// const chessBoard = (row,column) => {
//   let arr =[];
//   for(let i = 0; i < row; i ++){
//     let subArr = [];
//     for(let j = 0; j < column ; j++){
//       subArr.push(0);
//     }
//     arr.push(subArr);
//   }
//   return arr;
// };

// console.log(chessBoard(8,8));

// Generate a chess board with white Queen and a black Queen  

// const generateBoard = (whiteQueen, blackQueen) => {

//   let chessBoard = [];

//   // create empty chess board
//   for (let i = 0; i < 8; i++) {

//     let row = [];

//     for (let j = 0; j < 8; j++) {
//       row.push(0);
//     }

//     chessBoard.push(row);

//   }

//   // add the queens
//   chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
//   chessBoard[blackQueen[0]][blackQueen[1]] = 1;

//   return chessBoard;
// };
                       // OR 
                        
const chessBoard = (row,column, whiteQueen, blackQueen) => {
  let arr =[];
  for(let i = 0; i < row; i ++){
    let subArr = [];
    for(let j = 0; j < column ; j++){
      if((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) {
        subArr.push(1)
      } else {
        subArr.push(0);
      }
    }
    arr.push(subArr);
  }
  return arr;
};

console.log(chessBoard(8,8,[0,5],[5,0]));