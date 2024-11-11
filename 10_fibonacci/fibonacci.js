const fibonacci = function(num) {
    //change num to number in case it is a string
    let strToNum = Number(num);
    if(strToNum === 0){
        return 0;
    }
    else if(strToNum <= 0){
        return "OOPS";
    }
    let fibo = [1,1,2,3];
    for(let i = 4; i <= strToNum; i++){
        let nextFibo = 0;
        nextFibo = fibo[i-1] + fibo[i-2];
        fibo[i] = nextFibo;
        fibo.push(nextFibo);
    }
    return fibo[strToNum-1];
};

// Do not edit below this line
module.exports = fibonacci;
