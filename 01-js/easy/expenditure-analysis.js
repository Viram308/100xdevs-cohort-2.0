/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let aggregatedMap = new Map();
  for(let i = 0; i<transactions.length; i++) {
    let t = transactions[i];
    if(aggregatedMap.has(t["category"]))
      aggregatedMap.set(t["category"], aggregatedMap.get(t["category"]) + t["price"]);
    else
      aggregatedMap.set(t["category"], t["price"]);
  }
  let aggregatedList = Array.from(aggregatedMap, ([category, totalSpent]) => ({ category, totalSpent }));
  console.log(aggregatedList);
  return aggregatedList;
}

module.exports = calculateTotalSpentByCategory;
