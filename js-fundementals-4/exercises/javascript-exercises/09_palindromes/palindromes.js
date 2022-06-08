const palindromes = function (inputString) {
    const lettersOnly = inputString.replace(/[/\s.,\/#!$%\^&\*;:{}=\-_`~()@]/g,"").toLowerCase();
    if (lettersOnly === [...lettersOnly].reverse().join('')) {
        return true;
    } else {
        return false;
    }
};

const testArr = ['A car, a man, a maraca.', 'Rats live on no evil star.', 'Lid off a daffodil.', 'Animal loots foliated detail of stool lamina.', 'A nut for a jar of tuna', 'A ! string!@#$']; 
const newArr = testArr.map(palindromes);
console.log(newArr);
console.log(palindromes('A ! string!@#$'));
// Do not edit below this line
module.exports = palindromes;
