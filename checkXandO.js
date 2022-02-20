// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// PseudoCode:
// 1. Loop over the string 
// 2. create two empty variables to keep track of x and o's count .
// 3. Update the respective variables when found an x or o .
// 4. after the loop has finished , go on to compare the values in the count .

function XO(str) {
  //code here
  let text = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for(let i = 0 ; i < text.length ; i ++ ){
    if( text[i] === "x" ){
      countX += 1
    }
    else if(text[i] === "o"){
      countO += 1;
    }
  }
  
  if(countX === countO){
    return true
  }
  else if(!countX || !countO){
    return false
  }
  else{
    return false 
  }
}
