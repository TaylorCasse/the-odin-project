const caesar = function(inputString, shiftValue) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const alphabetClone = [...alphabet];
    const alphabetShift = alphabetClone.splice(0, shiftValue);
    let shiftedAlphabet;
    if (shiftValue > 0) {
        shiftedAlphabet = alphabetClone.concat(alphabetShift);
    } else if (shiftValue < 0) {
        shiftedAlphabet = alphabetShift.concat(alphabetClone);
    } else {
        return 'ERROR: Invalid shift value';
    }
    

    const stringArray = inputString.split('');
    let encryptedArray = [];
    for (let letter of stringArray) {
        if (alphabet.includes(letter.toUpperCase())) {
            let newIndex = alphabet.indexOf(letter.toUpperCase());
            if (letter !== letter.toUpperCase()) {
                encryptedArray.push(shiftedAlphabet[newIndex].toLowerCase());
            } else {
                encryptedArray.push(shiftedAlphabet[newIndex]);
            }
        } else {
            encryptedArray.push(letter);
        }

        
    }
    return encryptedArray.join('');
};
console.log(caesar('hey', 5))
// Do not edit below this line
module.exports = caesar;
