/*
  Problem Statement: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
*/

function binarySearch(nonRepetitiveScores, aliceScore)
{
    let mid = Math.floor(nonRepetitiveScores.length / 2);
    let low = 0;
    let high = nonRepetitiveScores.length - 1;

    while(low < high)
    {
        if(nonRepetitiveScores[mid] === aliceScore || (aliceScore > nonRepetitiveScores[mid] && aliceScore < nonRepetitiveScores[mid - 1])){
            return mid + 1;
        }
        else if(aliceScore < nonRepetitiveScores[mid] && aliceScore >= nonRepetitiveScores[mid + 1])
        {
            return mid + 2;
        }
        else if(aliceScore < nonRepetitiveScores[mid]){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
        mid = Math.floor((high + low) / 2);
    }
}

function findLeaderboardRank(nonRepetitiveScores, aliceScore)
{
    if(aliceScore >= nonRepetitiveScores[0]){
        return 1;
    }
    if(aliceScore < nonRepetitiveScores[nonRepetitiveScores.length - 1]){
        return nonRepetitiveScores.length + 1;
    }

    return binarySearch(nonRepetitiveScores, aliceScore);
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let nonRepetitiveScores = [];
    let index = 1;
    let result = [];
    nonRepetitiveScores[0] = scores[0];

    for(let i = 1; i < scores.length; i++)
    {
        if( scores[i] !== scores[i - 1])
        {
            nonRepetitiveScores[index++] = scores[i];
        }
    }
    for(let i = 0; i < alice.length; i++)
    {
        result[i] = findLeaderboardRank(nonRepetitiveScores, alice[i]);
    }
    return result;
}
