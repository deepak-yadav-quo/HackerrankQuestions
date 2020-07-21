/*
  Problem Statement: https://www.hackerrank.com/challenges/the-time-in-words/problem
*/
function timeInWords(hour, minutes) {
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

    if(minutes === 0) {
        return hoursInWords[hour % 12] + " o' clock";
    }else if(minutes <= 30) {
        if(minutes % 15 === 0) {
            return minutesInWords[minutes % 30] + " past " + hoursInWords[hour % 12];
        }else if(minutes === 1) {
                return minutesInWords[minutes] + " minute past " + hoursInWords[hour % 12];
        }else {
            return minutesInWords[minutes] + " minutes past " + hoursInWords[hour % 12];
        }
    }else {
        if(minutes % 15 === 0) {
            return minutesInWords[minutes % 30] + " to " + hoursInWords[(hour + 1) % 12];
        }else if(60 - minutes === 1) {
                return minutesInWords[60 - minutes] + " minute to " + hoursInWords[(hour + 1) % 12];
        }else {
            return minutesInWords[60 - minutes] + " minutes to " + hoursInWords[(hour + 1) % 12];
        }
    }
}
