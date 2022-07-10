// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(str){
  let obj ={};
    let text = str.toLowerCase();
    for(let i = 0 ; i < text.length ; i ++){
      if(!obj[text[i]]){
        obj[text[i]] = 1
      }
      else{
        obj[text[i]] += 1;
      }
    }
    let countRepeatedKeys = 0;
    for(let key in obj){
      if(obj[key] > 1){
        countRepeatedKeys += 1
        console.log(countRepeatedKeys);
      }
    }
    return countRepeatedKeys;
  }
  console.log(duplicateCount("aA11b"));
  console.log(duplicateCount("Indivisibilities"));
  console.log(duplicateCount("Abracadabra"));

// PseudoCode :
// 1. Created an empty Object so that later on loop the keys to find which has value greater than 1.
// 2. Loop through the string provided.
// 3. While looping checked if the key / string's character exist in Object , if not update the count to 1 .
// 4 . if the object key already exist then update the key value ie. count to += 1.
// 5. Now its time to loop over the newly created object as it is not empty anymore.
// 6. loop through the keys of the object to return only those keys whose values are greater than 1.
