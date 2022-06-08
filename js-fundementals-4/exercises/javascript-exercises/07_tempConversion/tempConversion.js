const ftoc = function(tempInF) {
  const tempInC = (tempInF - 32) * (5 / 9);
  return Math.round(tempInC * 10) / 10;

};

const ctof = function(tempInC) {
  const tempInF = (tempInC * (9 / 5) + 32);
  return Math.round(tempInF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
