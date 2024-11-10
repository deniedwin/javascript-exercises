const palindromes = function (myString) {
    for(let i = 0; i < myString.length; i++){
        if(myString[i] !== myString[myString.length-(i+1)]){
            return false;
        }
        else{
            return true;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
