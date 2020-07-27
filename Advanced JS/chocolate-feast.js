/*
  Problem Statement: https://www.hackerrank.com/challenges/chocolate-feast/problem
*/
function chocolateFeast(initialAmount, chocolateCost, wrappersToChocolate) {
    let maxChocolates = Math.floor(initialAmount / chocolateCost);
    let wrappers = maxChocolates;
    initialAmount = initialAmount % chocolateCost;

    while(wrappers >= wrappersToChocolate){
        const chocolateFromWrapper = Math.floor(wrappers / wrappersToChocolate);
        maxChocolates += chocolateFromWrapper;
        wrappers = chocolateFromWrapper + wrappers % wrappersToChocolate;
    }

    return maxChocolates;
}
