// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// PseudoCode :
//1. Loop through both strings at the same time .
// 2. Defining if condition to check if the string already contain characters from both strings. Also cheching if s1 and s2 arent empty.
// 3. Convert the empty string to array  to sort it and then join each character with no space 
// 4. convert back to a string .

function longest(s1, s2) {
  // your code
  let emptyString = "" ;
  for(let i = 0 , j = 0 ; i < s1.length , j < s2.length ; i ++ , j ++ ){
    if(!s1[i]){
      if(!emptyString.includes(s2[j])){
        emptyString += s2[j];
      }
    }
    else if (!s2[j]){
      if(!emptyString.includes(s2[j])){
        emptyString += s1[j];
      }
    }
    else if( s1[i] && s2[j] ){
      if(!emptyString.includes(s1[i]) && !emptyString.includes(s2[j])){
        if((s1[i]===s2[j])){
          emptyString += s1[i] ;
        }
        else{
          emptyString += s1[i] + s2[j] ;
        }
        }
      else if(!emptyString.includes(s1[i]) && emptyString.includes(s2[j])){
        emptyString += s1[i] ;
      }
      else if(emptyString.includes(s1[i]) && !emptyString.includes(s2[j])){
        emptyString += s2[j] ;
      }
    }
  }
  const arr = Array.from(emptyString).sort();
  let str = arr.join("").toString();
  return str ;
}
// let a = "xyaabbbccccdefww"
// let b = "xxxxyyyyabklmopq"
// //  -> "abcdefklmopqwxy" "aehrsty"
console.log((longest("aretheyhere", "yestheyareh")))
console.log(longest("inmanylanguages", "theresapairoffunctions"))