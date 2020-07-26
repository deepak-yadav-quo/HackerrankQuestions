/*
  Problem Statement: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
*/
function jumpingOnClouds(clouds, jumpLength) {
    let totalEnergy = 100;
    const totalClouds = clouds.length;
    let currentCloud = jumpLength % totalClouds;

    while(currentCloud != 0){
        totalEnergy -= clouds[currentCloud] * 2 + 1;
        currentCloud = (currentCloud + jumpLength) % totalClouds;
    }
    totalEnergy -= clouds[currentCloud] * 2 + 1;
    return totalEnergy;
}
