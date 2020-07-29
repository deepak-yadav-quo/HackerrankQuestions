/*
  Problem Statement: https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
*/
function hackerrankInString(text) {
    const sequenceToCheck = "hackerrank";
    let j = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] === sequenceToCheck[j])
            j++;
    }
    return j === sequenceToCheck.length ? "YES" : "NO";
}
