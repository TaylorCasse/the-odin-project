const reverseString = function(string) {
    const stringSplit = string.split('');
    const reversedArray = [];
    for (let i = 1; i <= stringSplit.length; i++) {
        let currentLetter = stringSplit.at(-i);
        reversedArray.push(currentLetter);
    }
    return reversedArray.join('');
};
// Do not edit below this line
module.exports = reverseString;
