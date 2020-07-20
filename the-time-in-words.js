/*
  Problem Statement: https://www.hackerrank.com/challenges/the-time-in-words/problem
*/
function timeInWords(h, m) {
    var minutesInWords = [
        "half",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "quarter",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine"
    ];

    var hoursInWords = [
        "twelve",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven"
    ];

    if(m===0){
        return hoursInWords[h%12]+" o' clock";
    }

    else if(m<=30){
        if(m%15===0){
            return minutesInWords[m%30]+" past "+hoursInWords[h%12];
        }else{
            if(m===1){
                return minutesInWords[m]+" minute past "+hoursInWords[h%12];
            }
            return minutesInWords[m]+" minutes past "+hoursInWords[h%12];
        }
    }

    else{
        if(m%15===0){
            return minutesInWords[m%30]+" to "+hoursInWords[(h+1)%12];
        }else{
            if(60-m===1){
                return minutesInWords[60-m]+" minute to "+hoursInWords[(h+1)%12];
            }
            return minutesInWords[60-m]+" minutes to "+hoursInWords[(h+1)%12];
        }
    }

}
