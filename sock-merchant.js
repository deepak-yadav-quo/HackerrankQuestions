/*
  Problem Statement: https://www.hackerrank.com/challenges/sock-merchant/problem
*/
function sockMerchant(totalSocks, numbersArr) {
    let numbersCount = {};
    for(let i = 0; i < totalSocks; i++){
        if(!(numbersArr[i] in numbersCount)){
            numbersCount[numbersArr[i]] = 1;
        }
        else{
            numbersCount[numbersArr[i]]+=1;
        }
    }
    let totalPairs = 0;
    for(let key in numbersCount){
        totalPairs += Math.floor(numbersCount[key]/2);
    }
    return totalPairs;
}
