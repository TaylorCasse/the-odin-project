const fibonacci = function(fibIndex) {
    if (fibIndex < 0) {
        return 'OOPS';
    }
    const testArray = [0, 1];
    for (let i = 2; i <= fibIndex; i++) {
        testArray.push(testArray[i - 1] + testArray[i - 2]);
    }
    testArray.shift();
    return testArray[fibIndex -1];
};
// Do not edit below this line
module.exports = fibonacci;
