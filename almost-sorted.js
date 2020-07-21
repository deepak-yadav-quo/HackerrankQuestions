/*
  Problem Statement: https://www.hackerrank.com/challenges/almost-sorted/problem
*/
function swap(arr, firstConflictingIndex, lastConflictingIndex){
    [arr[firstConflictingIndex], arr[lastConflictingIndex]] = [arr[lastConflictingIndex], arr[firstConflictingIndex]];

}

function isSorted(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Complete the almostSorted function below.
function almostSorted(arr) {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    var firstConflictingIndex = -1, lastConflictingIndex = -1;
    var subarr;
    var firstReverseIndex;
    var lastReverseIndex;

    if(isSorted(arr)) {
        ws.write("yes" + "\n");
        return;
    }

    for(var i = 0; i < arr.length; i++){
        if(i != arr.length - 1 && arr[i] > arr[i + 1] && firstConflictingIndex === -1){
            firstConflictingIndex = i;

        }
        if(i > 0 && arr[i] < arr[i - 1]){
            lastConflictingIndex = i;
        }
    }

    swap(arr, firstConflictingIndex, lastConflictingIndex);

    if(isSorted(arr)){
        ws.write("yes" + "\n");
        firstConflictingIndex += 1;
        lastConflictingIndex += 1;
        ws.write("swap " + firstConflictingIndex + " " + lastConflictingIndex + "\n");
        return;
    }

    swap(arr, firstConflictingIndex, lastConflictingIndex);

    subarr = arr.slice(firstConflictingIndex, lastConflictingIndex + 1).reverse();
    firstReverseIndex = firstConflictingIndex;
    lastReverseIndex = lastConflictingIndex;

    while(firstReverseIndex <= lastReverseIndex){
        swap(arr, firstReverseIndex, lastReverseIndex);
        firstReverseIndex++;
        lastReverseIndex--;
    }

    if(isSorted(subarr) && isSorted(arr)){
        ws.write("yes" + "\n");
        firstConflictingIndex += 1;
        lastConflictingIndex += 1;
        ws.write("reverse " + firstConflictingIndex + " " + lastConflictingIndex + "\n");
        return;
    }

    else{
        ws.write("no" + "\n");
        return;
    }
}
