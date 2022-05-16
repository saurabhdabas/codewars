// Problem

// Write a program that takes any number of command line arguments, converts each to pig latin (the rules are in the next paragraph), then puts the translated words together into one sentence logged to the console.

// The true pig latin rules would be a bit difficult to implement, so let's simplify them. Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

// If the final program were called pig-latin.js, then the following Terminal commands show several example outputs.

// node pig-latin.js pig latin
// igpay atinlay
// node pig-latin.js this is all just gibberish
// histay siay llaay ustjay ibberishgay

const pigLatin = (text) => {
  let arr = text.split(" ");
  let newStr = "";
  for(let i = 0 ; i < arr.length ; i ++) {
    let subStr= "";
    for( let j = 1; j < arr[i].length ; j++) {
      subStr += arr[i][j]
    }
    newStr += subStr + arr[i][0] + "ay" + " ";
  }
  return newStr.slice(0,-1);
}

console.log(pigLatin("pig latin translator"));