/*
  Problem Statement: https://www.hackerrank.com/challenges/equality-in-a-array/problem
*/
function equalizeArray(arr) {
    const numCount = {};
    let maxNumCount = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++){
        numCount[arr[i]] = !(arr[i] in numCount) ? 1 : numCount[arr[i]] + 1;
    }
    for(let num in numCount){
        maxNumCount = maxNumCount < numCount[num] ? numCount[num] : maxNumCount;
    }
    return arr.length - maxNumCount;
}
