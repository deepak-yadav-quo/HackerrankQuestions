/*
  Problem Statement: https://www.hackerrank.com/challenges/minimum-loss/problem
*/
function minimumLoss(prices) {
    var priceIndex = {};
    for(let i = 0; i < prices.length; i++){
        priceIndex[prices[i]] = i;
    }

    prices = prices.sort(function(a, b){return b - a});
    var minLoss = Number.POSITIVE_INFINITY;
    for(var index = 0; index < prices.length - 1; index++){
        if(priceIndex[prices[index]] < priceIndex[prices[index + 1]] && prices[index] - prices[index + 1] < minLoss){
            minLoss = prices[index] - prices[index + 1];
        }
    }
    return minLoss;
}
