// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// PseudoCode :
//1.Created an empty array 
// 2. Check if an integer is divisible by all numbers, if keep pushing it to the array.
// 3. To Check prime , the arr should have one and the number itself ie. the length of array can never be greater than 2 .
// 4. Slice the arr from 2nd element till last second element , if the integer is not prime .
function divisors(integer){
  let arr = [];
  for(let i = 0 ; i <= integer ; i ++){
    if(integer % i === 0){
      arr.push(i);
    }
  }
  if(arr.length === 2){
    return `${integer} is prime`;
  }
  else{
    return arr.slice(1,arr.length-1);
  }
}
