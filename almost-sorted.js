/*
  Problem Statement: https://www.hackerrank.com/challenges/almost-sorted/problem
*/

function isSorted(arr) {
    for(var iterator = 0; iterator < arr.length-1; iterator++) {
        if(arr[iterator] > arr[iterator+1]) {
            return false;
        }
    }
    return true;
}

// Complete the almostSorted function below.
function almostSorted(arr) {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    if(isSorted(arr)) {
        ws.write("yes" + "\n");
        return;
    }

    var conflictingIndex1 = -1, conflictingIndex2 = -1;

    for(var iterator = 0; iterator < arr.length; iterator++){
        if(iterator!=arr.length-1 && arr[iterator] > arr[iterator+1] && conflictingIndex1===-1){
            conflictingIndex1 = iterator;

        }
        if(iterator>0 && arr[iterator] < arr[iterator-1]){
            conflictingIndex2 = iterator;
        }
    }
    [arr[conflictingIndex1],arr[conflictingIndex2]]=[arr[conflictingIndex2],arr[conflictingIndex1]];

    if(isSorted(arr)){
        ws.write("yes" + "\n");
        conflictingIndex1+=1;
        conflictingIndex2+=1;
        ws.write("swap " + conflictingIndex1 + " " + conflictingIndex2 + "\n");
        return;
    }

    [arr[conflictingIndex1],arr[conflictingIndex2]]=[arr[conflictingIndex2],arr[conflictingIndex1]];

    var subarr = arr.slice(conflictingIndex1, conflictingIndex2+1).reverse();
    var reverseIndex1 = conflictingIndex1, reverseIndex2 = conflictingIndex2;
    while(reverseIndex1<=reverseIndex2){
        [arr[reverseIndex1],arr[reverseIndex2]]=[arr[reverseIndex2],arr[reverseIndex1]];
        reverseIndex1++;
        reverseIndex2--;
    }

    if(isSorted(subarr) && isSorted(arr)){
        ws.write("yes" + "\n");
        conflictingIndex1+=1;
        conflictingIndex2+=1;
        ws.write("reverse " + conflictingIndex1 + " " + conflictingIndex2 + "\n");
        return;
    }

    else{
        ws.write("no" + "\n");
        return;
    }


}
