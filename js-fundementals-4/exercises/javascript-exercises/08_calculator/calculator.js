const add = function(...args) {
  let result = 0;
  for (let num of args) {
    result += num;
  }
  return result;
};

const subtract = function(startNum, ...args) {
	let result = startNum;
  for (let num of args) {
    result -= num;
  }
  return result;
};

const sum = function(...args) {
  // Checks if the input is in the form of an array or multiple arguments and handles each case
  if (args.length === 1) {
    args = [...args[0]];
  }

	return +args.reduce((previous, current) => previous + current, 0);
};

console.log(sum(1, 2, 3));

const multiply = function(...args) {
  if (args.length === 1) {
    args = [...args[0]];
  }

	return +args.reduce((previous, current) => previous*current, 1);
};

const power = function(...args) {
  if (args.length === 1) {
    args = [...args[0]];
  }
	return +args.reduce((previous, current) => previous**current);
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    const factorialArray = [...Array(num).keys()].map(item => item + 1);
    return multiply(factorialArray);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
