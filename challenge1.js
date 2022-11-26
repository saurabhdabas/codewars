let x = "wrw blf hvv ozhg mrtsg'h vkrhlwv?";
let output = "did you see last night's episode?";

const solution = (x) => {
  const array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let newString = '';
  let arrayOfString = [...x];
  for(let i = 0; i < arrayOfString.length; i++){
    if(array.includes(arrayOfString[i])){
      let index = array.findIndex((item)=>item === arrayOfString[i]);
      newString += array[array.length - index -1]; 
    } else {
      newString += arrayOfString[i];
    }
  }
  return newString;
}
  
console.log(solution(x));

// def solution(x):
  // array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  // newString = '';
  // arrayOfString = [...x];