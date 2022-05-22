function decimalTobinary(num){
  if(num === 0){
    return 0;
  }
  else{
    return (num%2 + 10*decimalTobinary(parseInt(num/2)));
  }
}

const result4 = decimalTobinary(15);
console.log(result4);