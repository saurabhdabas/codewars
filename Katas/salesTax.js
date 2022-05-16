// Given the following data, implement a function calculateSalesTax that calculates the total sales and total tax, grouped by company.

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
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

// This function will calculate sum 

const sum = (arr) => {
  const total = arr.reduce((acc,currVal)=>{
    return acc + currVal;
  },0);
  return total;
}

// The function should look like this:
const calculateSalesTax = function(salesData, taxRates) {
  // Implement your code here
  let newObj = {};
  companySalesData.forEach((company)=>{
    if(!newObj[company.name]) {
      newObj[company.name] = {
        totalSales: sum(company.sales),
        totaltaxes : sum(company.sales) * taxRates[company.province]
      }
    } else {
      newObj[company.name].totalSales += sum(company.sales);
      newObj[company.name].totaltaxes += sum(company.sales) * taxRates[company.province]
    }
  });
  return newObj;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));