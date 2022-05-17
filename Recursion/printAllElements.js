// Print out all the elements in an array
// We will be building a function that takes in an array as its input and prints out all the items in that array individually.

// const array = ["😎", ["💩", "🤗"], "😼", "😂"];
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
const printItems = (array) => {
  for(let emoji of array) {
    if(Array.isArray(emoji)){
      printItems(emoji)
    } else {
      console.log(emoji)
    }
  }
};
printItems(array);