const reverseString = function(str) {
    
    let strToArr = str.split("");
    let revStrToArr = [];
    let index = 0;

    for(let i = strToArr.length-1; i >= 0; i--){
        revStrToArr[index] = strToArr[i];
        index++;
    }
    return revStrToArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
