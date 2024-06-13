//Best time to buy and sell a stock
//Choose a day to buy a stock and choose a different day to sell the stock, and find the max profit.
//if you cannot achieve any profit, return 0.

function maxProfit(prices) {
  // var for minimum price and maximum profit
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // Update the min price if the current price is lower
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Calculate the profit and update the maximum profit if this profit is higher
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}

const price = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(price));
