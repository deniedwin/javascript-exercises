const getTheTitles = function(arr) {
    let arrBooks = [];
    arr.forEach(item => {
        arrBooks.push(item.title);
    });
    return arrBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
