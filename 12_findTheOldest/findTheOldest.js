const findTheOldest = function(arr) {
    const d = new Date();
    let old = 0;
    let oldIndex = 0;
    arr.forEach((item, index) => {
        if(item.yearOfBirth === undefined){
            item.yearOfBirth = d.getFullYear();
        }
        else if(item.yearOfDeath === undefined){
            item.yearOfDeath = d.getFullYear();
        }
        
        let age = item.yearOfDeath - item.yearOfBirth;
        if(age > old){
            old = age;
            oldIndex = index;
        }
    });
    return arr[oldIndex];
};

// Do not edit below this line
module.exports = findTheOldest;

