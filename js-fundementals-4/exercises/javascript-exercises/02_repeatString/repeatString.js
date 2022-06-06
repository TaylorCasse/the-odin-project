const repeatString = function(stringInput, n) {
    let finalString;
    for (let i; i < n; i++) {
        finalString += stringInput;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
