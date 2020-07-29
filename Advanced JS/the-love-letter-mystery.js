// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(text) {
    const textLength = text.length;
    let operationsRequired = 0;
    for (let i = 0; i < textLength / 2; i++){
        if (text[i] != text[textLength - i - 1]){
           const start = text.charCodeAt(i);
           const end = text.charCodeAt(textLength - i - 1);
           operationsRequired += (end - start) > 0 ? end - start : start - end;
        }
    }
    return operationsRequired;
}
