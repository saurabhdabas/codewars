// without([1, 2, 3], [1]) 
// without(["1", "2", "3"], [1, 2, "3"])

const without = (arr,item) => {
  const filtered = arr.filter((elem)=>{
    if(!item.includes(elem)){
      return elem
    }
  });
  return filtered;
};
without([1, 2, 3], [1]) 
without(["1", "2", "3"], [1, 2, "3"])