const removeFromArray = function(arr, ...items) {

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < items.length; j++){
            if(arr[i] === items[j]){
                arr.splice(i, 1);
                i--; //decrement i in order to not skip any i's since once items are removed the array shifts to the left
                break;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;