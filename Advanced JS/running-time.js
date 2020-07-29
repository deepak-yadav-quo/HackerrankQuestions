/*
  Problem Statement: https://www.hackerrank.com/challenges/running-time/problem
*/
function runningTime(arr) {
    let shiftsRequired = 0;
    const sortedArray = [...arr];
    sortedArray.sort((a, b) => a - b);

    if(arr === sortedArray) {
        return 0;
    }else {
        for(let i = 1; i < arr.length; i++){
            const currNum = arr[i];
            for(let j = 0; j < i; j++){
                if(arr[j] > currNum){
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    shiftsRequired++;
                }
            }
        }
        return shiftsRequired;
    }
}
