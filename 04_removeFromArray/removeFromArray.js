const removeFromArray = function(arr, ...items) {

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < items.length; j++){
            if(arr[i] === items[j]){
                arr.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;