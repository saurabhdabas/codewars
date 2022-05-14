// To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
// So the following URL encoded string:

// city=Vancouver&weather=lots%20of%20rain
// Could be converted to the following JavaScript object:

// {
//   city: "Vancouver",
//   weather: "lots of rain"
// }

const urlDecoded = (text) => {
  let newArr= [];
  let newObj ={};
  const arr = text.split("&");
  for(let i = 0; i < arr.length ; i++){
    const subArr = arr[i].replace(/%20/g," ").split("=");
    newArr.push(subArr);
  }
  for(let j = 0; j < newArr.length; j++) {
    newObj[newArr[j][0]] = newArr[j][1]
  }
  return newObj;
}
console.log(urlDecoded("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecoded("city=Vancouver&weather=lots%20of%20rain&temperature=moderate"));