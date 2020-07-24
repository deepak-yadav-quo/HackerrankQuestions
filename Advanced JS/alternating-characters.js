/*
  Problem Statement: https://www.hackerrank.com/challenges/alternating-characters/problem
*/
function alternatingCharacters(s) {
    let result = 0;

    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === s[i + 1]){
            result++;
        }
    }
    return result;

}
