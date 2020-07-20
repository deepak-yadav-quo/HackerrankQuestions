/*
  Problem Statement: https://www.hackerrank.com/challenges/greedy-florist/problem
*/
function getMinimumCost(totalFriends, flowersCost) {
    let totalFlowers = flowersCost.length;

    let minimumCost = 0;
    flowersCost = flowersCost.sort((a,b)=>(a-b));

    if(totalFlowers <= totalFriends ){
        for(let costIndex in flowersCost){
            minimumCost += flowersCost[costIndex];
        }
    }

    else{
        for(let costIndex in flowersCost){
            let quotient = Math.floor((costIndex)/totalFriends);
            minimumCost += (quotient + 1)*flowersCost[(totalFlowers-1) - costIndex];
            console.log(minimumCost);
        }
    }
    return minimumCost;
}
