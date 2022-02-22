// Finding the sum of two largest numbers of an array . 


// PseudoCode :
// 1. Find the Maximum value of the array and store it in a variable.
// 2. Spilce the element from the array and again find max value and store it in a variable.
// 3. add both variables. 

const numbers = [2 , 55 , 40 , 3, 10 , 99 , 25 , 108 , 3 , 7 , 0];
let arr=[];

function findLargestNumber( numbers ){
  let result = numbers[0] ;
  
  for ( let i = 0 ; i < numbers.length ; i ++ ) { 
    if ( result <= numbers[ i + 1 ]) {
        result = numbers[ i + 1 ];
    }
  }
  return result ;
}
const maxValue = findLargestNumber( numbers );

const a = numbers.indexOf(maxValue);

numbers.splice(a,1);

const secondMax = findLargestNumber( numbers );

const finalResult = maxValue + secondMax ;
console.log(finalResult);