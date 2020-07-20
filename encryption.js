/*
  Problem Statement: https://www.hackerrank.com/challenges/encryption/problem
*/
function encryption(text) {
    var trimmedString = text.replace(/ /g,'');
    console.log(trimmedString);
    var textLength = trimmedString.length;
    var lengthSquareRoot = Math.sqrt(textLength);

    var rows, columns;

    if(Math.floor(lengthSquareRoot)===Math.ceil(lengthSquareRoot)){
        rows = columns = lengthSquareRoot;
    }
    else{
        rows = Math.floor(lengthSquareRoot);
        columns = Math.ceil(lengthSquareRoot);
    }

    let result = "";
    for(let i = 0; i < columns; i++){
        for(let j = i; j < textLength;){
            result+=trimmedString[j];
            j+=columns;
        }
        result+=" ";
    }
    return result;
}
