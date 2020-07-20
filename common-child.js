/*
  Problem Statement: https://www.hackerrank.com/challenges/common-child/problem
*/
function commonChild(s1, s2) {
    var dp = new Array(s2.length + 1);
    for(var i = 0; i < dp.length; i++){
        dp[i] = new Array(s1.length + 1).fill(0);
    }

    for(var i = 1; i < dp.length; i++){
        for(var j = 1; j < dp[i].length; j++){
            if(s2[i-1]===s1[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[s1.length][s2.length];
}
