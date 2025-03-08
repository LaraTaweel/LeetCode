/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  buy = prices[0]
  sell=0 

  for (let i=1 ; i< prices.length ;  i++ ){

    if (prices[i]< buy ){
        buy =prices[i]
    }else if ( (prices[i] - buy) > sell ){
        sell = prices[i] - buy
    }

  }
  return sell 
};