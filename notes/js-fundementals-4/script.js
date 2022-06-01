
function myFunction() {
    console.log('Hello, World')
}

// Objects in JS are effectively lists indexed by name
const myObject = {
    why: 'Just because',
    how: console.log('does it matter?'),
    when: function () {
        console.log(`The time is: ${Date.UTC}`);
    }
}

myObject.how; // 'does it matter?'
myObject.when; // undefined (?)

function genRandomArray(n) {
    const outputArray = []
    for (let i = 0; i < n; i++) {
        outputArray.push(Math.floor(Math.random()*100));
    }
    return outputArray;
}

function arraysDemo() {

    // Convention is to define with const and array literal
    const demoArray = [1, 2, 3, 4, 5];

    // Arrays can hold pretty much anything 
    const demoArray2 = [[myFunction], myObject, myObject.why]
    console.log(demoArray2);
    const anArray = genRandomArray(10);
    
   
    // this is misleading since it isn't actually a numercal sort
    // it effectively works like it's converting the number to a 
    // string and then ordering from lowest to highest
    console.log(anArray.sort());

    console.log(anArray[-1]);   // undefined (doesn't work like .slice apparently)
    console.log(anArray[anArray.length - 1]);       // this is the way to do it

    anArray[anArray.length] = 20; // Equivalent to .push()
    anArray[anArray.length + 1] = 70;  
    console.log(anArray); // created an empty gap at anArray[anArray.length]. Just use .push()

    // How to tell if an object is an array, since typeof [] returns object
    console.log(Array.isArray([])); // true
    console.log(Array.isArray(myObject)); // false

    // Array manipulation
    console.log('Array Manipulation');
    const manArray = [1, 2, 3, 4, 5];
    console.log(manArray.push(6));      // [1, 2, 3, 4, 5, 6] (adds element to the end of array)
    console.log(manArray.pop());        // 6 (removes and return the last element)
    console.log(manArray.shift());      // 1 (removes and returns the first element and shifts all other elements down one index)
    console.log(manArray);              // [2, 3, 4, 5]
    console.log(manArray.unshift(1))    // [1, 2, 3, 4, 5] (addeds element to index 0 and 'unshifts' all other elements forward one index)

    const differentArray = [6, 7, 8, 9];
    console.log(manArray.concat(differentArray));   // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    manArray.splice(5);
    console.log(manArray);  // [1, 2, 3, 4, 5]
    manArray.splice(1, 0, 'A string');
    console.log(manArray); // [1, 'A string', 2, 3 etc etc]

    // Interesting interaction
    console.log(manArray.splice(1, 0, 'A string')); // []
    console.log(manArray);  //[1, 'A string', 'A string', 2, 3, 4, 5]
}
// arraysDemo();

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
function loopsDemo() {

    // Iterate through arrays
    for (const cat of cats) {
        console.log(cat);
    }

    // .map() operates on all elements in an array with a callback function
    // and returns a new array with the elements being whatever the function returned
    // It does not mutate the source array, while .forEach() does
    const upperCats = cats.map((cat) => cat.toUpperCase());
    console.log(upperCats);

    // .filter() returns all elements of an array that match the conditional
    const lCats = cats.filter((cat) => cat.startsWith('L')); //.startsWith() is case sensitive and you can't use it on regex
    console.log(lCats); // [Leopard, Lion]

}
loopsDemo();

// Contact add and search

document.querySelector('#contact-add-button').addEventListener('click', () => {
    const newContactName = document.querySelector('#add-name-input').value;
    const newContactNumber = document.querySelector('#add-number-input').value;
})

function contactSearch() {
}


