/*
  Problem Statement: https://www.hackerrank.com/challenges/sherlock-and-squares/problem
*/
function squares(a, b) {
    return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}
