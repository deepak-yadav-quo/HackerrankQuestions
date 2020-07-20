/*
  Problem Statement: https://www.hackerrank.com/challenges/candies/problem
*/
function candies(totalStudents, studentRatings) {
    var candyDistributeLeft = [];
    var candyDistributeRight = [];

    for(var i = 0; i < totalStudents; i++){
        candyDistributeLeft[i] = 1;
        candyDistributeRight[i] = 1;
    }

    for(var i = 1; i < totalStudents; i++){
        if(studentRatings[i] > studentRatings[i-1]){
            candyDistributeLeft[i] = candyDistributeLeft[i-1] + 1;
        }
    }

    for(var i = totalStudents - 2; i >= 0; i--){
        if(studentRatings[i] > studentRatings[i+1]){
            candyDistributeRight[i] = candyDistributeRight[i+1] + 1;
        }
    }

    var candiesDistributeOptimal = 0;

    for(var i = 0; i < totalStudents; i++){
        candiesDistributeOptimal += Math.max(candyDistributeLeft[i], candyDistributeRight[i]);
    }

    return candiesDistributeOptimal;
}
