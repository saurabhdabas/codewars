// Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = (text) => {
  const arr = text.split(" ");
  let camelCased = arr[0];
  for(let i = 1; i < arr.length ; i ++){
    camelCased += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return camelCased;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
// Output

/*
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious 
*/