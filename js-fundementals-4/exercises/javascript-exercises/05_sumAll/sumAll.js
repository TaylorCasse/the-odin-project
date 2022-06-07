const sumAll = function(start, end) {
    if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    } else if (end < start) {
        // Significantly faster than [a, b] = [b, a]
        let swap = end;
        end = start;
        start = swap;
    }
    let testArr = [...Array(end).keys()].map((item) => item + 1);
    let anotherTestArr = testArr.slice(testArr.indexOf(start));
    const final = anotherTestArr.reduce((previous, current) => previous + current, 0);
    return final;
};

console.log(sumAll(1, 5));

// Do not edit below this line
module.exports = sumAll;
