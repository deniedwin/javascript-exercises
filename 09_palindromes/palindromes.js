const palindromes = function (myString) {
    let cleanString = ""; //string to remove punctuation and other chars
    let reverseString = ""; //clean string but reverses order
    const alpha = "abcdefghijklmnopqrstuvwxyz0123456789"; //string that includes desirec chars
    //myString is first converted to lowercase
    //then it split into an array
    //then retunrs only the items that are in alpha (others are discardted)
    //then join back to string
    cleanString = myString.toLowerCase().split("").filter((item) => (alpha.includes(item))).join("");
    //reverseString is split to array
    //then reversed
    //then join back to string
    reverseString = cleanString.split("").reverse().join("");
    //returns true or false if the clean string is the same as reverse string
    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
