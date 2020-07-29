/*
  Problem Statement: https://www.hackerrank.com/challenges/alternating-characters/problem
*/
function findDigits(num) {
    const totalUnitDigits = 10;
    const digitsArr = new Array(totalUnitDigits).fill(0);
    let singleDigit = num;
    let result = 0;
    while(singleDigit != 0){
        digitsArr[singleDigit % 10]++;
        singleDigit = Math.floor(singleDigit / 10);
    }
    for(let i = 1; i < totalUnitDigits; i++){
        if(digitsArr[i] > 0 && num % i === 0){
            result += digitsArr[i];
        }
    }
    return result;
}
