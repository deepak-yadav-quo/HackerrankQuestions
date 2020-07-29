/*
  Problem Statement: https://www.hackerrank.com/challenges/gem-stones/problem
*/
function gemstones(textArr) {
    return [...textArr.reduce((gems, textToCompare) => new Set([...gems].filter(char => textToCompare.includes(char))))].length;
}
