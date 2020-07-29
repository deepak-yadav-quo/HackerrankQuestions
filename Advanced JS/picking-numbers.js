/*
  Problem Statement: https://www.hackerrank.com/challenges/picking-numbers/problem
*/
function pickingNumbers(integerArr) {
    // Write your code here
    let maxSubarrayLengthWithDiffOne = 0;
    for(let i = 0; i < integerArr.length; i++){
        const numCount = integerArr.filter(num => num === integerArr[i]).length;
        const onePlusNumCount = integerArr.filter(num => num === integerArr[i] + 1).length;
        maxSubarrayLengthWithDiffOne = Math.max(numCount + onePlusNumCount, maxSubarrayLengthWithDiffOne);
    }
    return maxSubarrayLengthWithDiffOne;
}
