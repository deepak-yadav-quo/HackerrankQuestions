// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(text) {
    let textLength = text.length;
    let operationsRequired = 0;
    for (let i = 0; i < textLength / 2; i++){
        if (text[i] != text[textLength - i - 1]){
           let start = text.charCodeAt(i);
           let end = text.charCodeAt(textLength - i - 1);
           operationsRequired += ((end - start) > 0) ? end - start : start - end;
        }
    }
    return operationsRequired;
}
