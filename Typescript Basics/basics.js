"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let n1;
n1 = 2;
const n2 = 5.8;
const printResult = true;
const resultPhrase = "Result is: ";
add(n1, n2, printResult, resultPhrase);
