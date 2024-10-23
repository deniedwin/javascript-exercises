const repeatString = function() {
    let str = "hey";
    let num = 3;
    let repStr = "";

    for(let i = 0; i < num; i++){
        repStr += str;
    }
    return repStr;
};

// Do not edit below this line
module.exports = repeatString;
