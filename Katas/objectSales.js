const taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const salesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
// The function should look like this:
const findTotalTaxes = (item,taxRates) => {
  let sum = 0;
  for(let key in taxRates){
    if(item.province === key){
      item.sales.forEach((value)=>{
        sum += value * taxRates[key];
      })
    }
  };
  return sum;
}
const findSumOfArray = (arr) => {
  let sum = 0;
  for(let i = 0 ; i < arr.length ; i ++){
    sum += arr[i];
  };
  return sum;
};

const calculateSalesTax = function(salesData, taxRates) {
  // Implement your code here
  const obj = {};
  for(let item of salesData){
    if(!obj[item.name]){
      obj[item.name] = { 
        TotalSales: findSumOfArray(item.sales),
        TotalTaxes: findTotalTaxes(item,taxRates)
      }
    } else {
      obj[item.name].TotalSales +=  findSumOfArray(item.sales)
      obj[item.name].TotalTaxes +=  findTotalTaxes(item,taxRates)
    }
  };
  console.log(obj);
};
calculateSalesTax(salesData,taxRates);