/*
  Problem Statement: https://www.hackerrank.com/challenges/flatland-space-stations/problem
*/
function flatlandSpaceStations(cities, spaceStations) {
    if(cities === spaceStations.length){
        return 0;
    }
    let maxDistance, lastCitySpaceStationDistance;

    spaceStations.sort((a, b) => a - b);
    maxDistance = spaceStations[0];
    lastCitySpaceStationDistance = (cities - 1) - spaceStations[spaceStations.length - 1];

    for(let i = 1; i < spaceStations.length; i++){
        const distance = Math.floor((spaceStations[i] - spaceStations[i-1]) / 2);
        if(maxDistance < distance)
            maxDistance = distance;
    }
    return (lastCitySpaceStationDistance < maxDistance) ? maxDistance : lastCitySpaceStationDistance;
}
