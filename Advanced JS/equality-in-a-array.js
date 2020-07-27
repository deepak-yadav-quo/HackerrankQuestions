/*
  Problem Statement: https://www.hackerrank.com/challenges/equality-in-a-array/problem
*/
function equalizeArray(arr) {
    const numCount = {};
    let maxNumCount = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++){
        if(!(arr[i] in numCount)){
            numCount[arr[i]] = 1;
        }else{
            numCount[arr[i]]++;
        }
    }
    for(let num in numCount){
        if(maxNumCount < numCount[num]){
            maxNumCount = numCount[num];
        }
    }
    return arr.length - maxNumCount;
}
