const camelCase = (text) => {
  const arr = text.split("-");
  let camelCased = '';
  for(let i = 0; i < arr.length ; i ++){
    camelCased += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return camelCased;
}
console.log(camelCase("the-stealth-warrior"));