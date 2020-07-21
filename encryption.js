/*
  Problem Statement: https://www.hackerrank.com/challenges/encryption/problem
*/
function encryption(text) {
    var trimmedString = text.replace(/ /g,'');
    var textLength = trimmedString.length;
    var textLengthSquareRoot = Math.sqrt(trimmedString.length);
    var rows, columns;
    let encryptedText = "";
    var floorTextLengthSquareRoot = Math.floor(textLengthSquareRoot);
    var ceilTextLengthSquareRoot = Math.ceil(textLengthSquareRoot)

    if(floorTextLengthSquareRoot === ceilTextLengthSquareRoot){
        rows = columns = textLengthSquareRoot;
    }
    else{
        rows = floorTextLengthSquareRoot;
        columns = ceilTextLengthSquareRoot;
    }

    for(let i = 0; i < columns; i++){
        for(let j = i; j < textLength;){
            encryptedText += trimmedString[j];
            j += columns;
        }
        encryptedText += " ";
    }
    return encryptedText;
}
