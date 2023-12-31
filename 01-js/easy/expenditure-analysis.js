/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const CategoryMap ={}
  for(let i=0;i<transactions.length;i++){
    const category=transactions[i].category;
    const price = transactions[i].price;
    CategoryMap[category] =(CategoryMap[category]||0) + price;
  }
  res=[]
  for(const category in CategoryMap){
    res.push({category, totalSpent: CategoryMap[category] })
  }

  return res;
}

module.exports = calculateTotalSpentByCategory;
