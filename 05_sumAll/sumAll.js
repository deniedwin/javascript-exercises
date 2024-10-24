const sumAll = function(numA, numB) {
    
    let start = 0;
    let end = 0;
    let sum = 0;

    if((numA || numB) < 0){
        return "ERROR";
    }
    else if(!Number.isInteger(numA) || !Number.isInteger(numB)){
        return "ERROR";
    }
    else if(numA > numB){
        start = numB;
        end = numA;
    }
    else {
        start = numA;
        end = numB;
    }

    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;