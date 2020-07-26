/*
  Problem Statement: https://www.hackerrank.com/challenges/gem-stones/problem
*/
function gemstones(textArr) {
    /*let text = new Set(textArr[0]);
    for(let i = 1; i < textArr.length; i++){
        const textToCompare = new Set(textArr[i]);
        text = [...text].filter(char => textToCompare.has(char));
    }
    return text.length;
    */
    return [...textArr.reduce((gems, textToCompare) => new Set([...gems].filter(char => textToCompare.includes(char))))].length;
}
