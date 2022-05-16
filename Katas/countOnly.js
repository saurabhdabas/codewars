// The function should report back how many instances of each string were found in the allItems array of strings.


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const allItems = ["a","a","b","c","d","e","a"];
const itemsToCount = {
  a:true,
  d:true,
  b:false,
  f:true
}

const countOnly = function(allItems, itemsToCount) {
  let finalObj = {};
  for(let item of allItems) {
    if(itemsToCount[item]){
      if(!finalObj[item]){
        finalObj[item] = 1;
      } else {
        finalObj[item] += 1;
      }
    }
  }
  return finalObj;
}
console.log(countOnly(allItems,itemsToCount));