// const removeFromArray = function() {
//     const argArray = [...arguments];
//     const mainArray = argArray.shift();
//     for (let item of argArray) {
//         if (mainArray.includes(item)) {
//             mainArray.splice(mainArray.indexOf(item), 1);
//         }
//     }
//     return mainArray;
// };

const removeFromArray = function(mainArray, ...itemsToRemove) {
    // clone array
    let anotherArray = [...mainArray];
    for (let item of anotherArray) {
        if (itemsToRemove.includes(item)) {
            mainArray.splice(mainArray.indexOf(item), 1);
        }
    }
    return mainArray;
}

console.log(removeFromArray([1, 2, 3, 4, 5], 5, 4));
// Do not edit below this line
module.exports = removeFromArray;
 