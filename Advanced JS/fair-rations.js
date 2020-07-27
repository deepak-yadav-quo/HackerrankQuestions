/*
  Problem Statement: https://www.hackerrank.com/challenges/fair-rations/problem
*/
function fairRations(breadLoaves) {
    const oddNoOfLoaves = [];
    let minLoavesRequired = 0;

    for(let i = 0 , j = 0; i < breadLoaves.length; i++){
        if(breadLoaves[i] % 2 != 0){
            oddNoOfLoaves[j] = i;
            j++;
        }
    }
    if(oddNoOfLoaves.length % 2 === 1)
        return "NO";

    for(let i = 0; i < oddNoOfLoaves.length; i+=2){
        minLoavesRequired += (oddNoOfLoaves[i+1] - oddNoOfLoaves[i]) * 2;
    }
    return minLoavesRequired;
}
