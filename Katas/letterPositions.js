// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length ; i++) {
    if(sentence[i] !== " ") {
      if(!results[sentence[i]]){
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse labs"))