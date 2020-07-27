/*
  Problem Statement: https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
*/
function sherlockAndAnagrams(text) {
    const anagramDictionary = new Map();
    let count = 0;
    for(let i = 1; i < text.length; i++){
        for(let j = 0; j < text.length - i + 1; j++){
            const substr = text.substr(j, i).split('').sort().join('');
            if(!anagramDictionary.has(substr)) {
                anagramDictionary.set(substr, 1);
            }else {
                const currSubstringCount = anagramDictionary.get(substr);
                count += currSubstringCount;
                anagramDictionary.set(substr, currSubstringCount + 1);
            }
        }
    }
    return count;
}
