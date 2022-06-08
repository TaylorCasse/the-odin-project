const caesar = function(inputString, shift) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const stringArray = inputString.split('');
    let encryptedArray = [];
    for (let letter of stringArray) {
        let newIndex = alphabet.indexOf(letter.toUpperCase()) + shift;
        if (letter !== letter.toUpperCase()) {
            encryptedArray.push(alphabet[newIndex].toLowerCase());
        } else {
            encryptedArray.push(alphabet[newIndex]);
        }
        
    }
    return encryptedArray.join('');
};
console.log(caesar('hey', 5))
// Do not edit below this line
module.exports = caesar;
