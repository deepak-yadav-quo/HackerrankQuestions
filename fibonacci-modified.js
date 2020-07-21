/*
  Problem Statement: https://www.hackerrank.com/challenges/fibonacci-modified/problem
*/
function fibonacciModified(t1, t2, n) {
    let fibValues = [];
    fibValues[0] = t1;
    fibValues[1] = t2;

    for(let i = 2; i < n; i++){
        fibValues[i] = BigInt(fibValues[i - 2]) + BigInt(fibValues[i - 1] * fibValues[i - 1]);
    }
    return BigInt(fibValues[n - 1]);
}
