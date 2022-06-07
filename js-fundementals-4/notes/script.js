
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

// document.querySelector('#contact-add-button').addEventListener('click', () => {
//     const newContactName = document.querySelector('#add-name-input').value;
//     const newContactNumber = document.querySelector('#add-number-input').value;
// })

function contactSearch() {
}

// break and continue
function whileLoopDemo() {
    let i = 0;
    // Standard while loop
    console.log('Standard while loop');
    while (i < 10) {
        // Remember: can do if statements on one line and omit curly brackets
        // if the code body is one line
        if (i % 2 === 0) console.log(i); // Logs even numbers
        i++;
    }

    // do...while loop
    // Condition comes after body, body is always run at least once
    console.log("do...while loop");
    i = 0;
    do {
        if (i % 2 === 0) console.log(i);
        i++;
    } while (i < 10)

    console.log('For loop with continue condition');
    // Can omit the begin condition since i is already defined
    i = 0;
    for (; i < 10; i++) {
        // continue skips the current iteration
        if (i % 2 !== 0) continue;
        console.log(i);
    }
    
    // Labels for break and continue
    // Used to break or continue out of a specific loop in a series of nested loops
    // Also works with continue
    // Basically will continue from or break from the label
    outer: 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let input = prompt(`Value at coords (${i}, ${j})?`);
            // better way of input checking than using isNaN()?
            if (!input) {
                alert('Loop broken');
                break outer;
            }
            console.log(`Value at coords (${i}, ${j}) = ${input}`);
        }
    }
    

    // Can break out of any labelled code block
    testLabel: {
        const input = prompt('Enter a value from 0 - 9');
        if (input < 0 || input > 9) {
            alert('You broke the rules!')
            break testLabel;
        }
        console.log(input);
    }
}
// whileLoopDemo();

function argDemo() {
    // Arguments Object
    // Can call the arguments of a function using zero-based indexing

    function argumentsTestFunction(arg1='Argument 1', arg2='Argument 2', agr3='Argument 3') {
        // Acts like an array in that it can be indexed with numbers
        // but it doesn't have array methods.
        // Interestingly, it returns undefined if no arguments are given in the call,
        // even if default values are present.
        console.log('\nArguments object test');
        console.log(arguments[0]);  // 'Argument 1'
        console.log(arguments[1]);  // 'Argument 2'
        console.log(arguments[3]);  // undefined

        // Can be made into a real array
        // using this:
        let argsArr1 = Array.prototype.slice.call(arguments)
        console.log(argsArr1);
        // using array literal
        let argsArr2 = [].slice.call(arguments);
        console.log(argsArr2);
        // using .from()
        let argsArr3 = Array.from(arguments);
        console.log(argsArr3);
        // using spread operator 
        let argsArr4 = [...arguments];
        console.log(argsArr4);
    }
   argumentsTestFunction('Argument 1', 'Argument 2', 'Argument 3');
}
argDemo();

function genRandInt(numLength, numLimit=[0, 9]) {
    // numLength = number of digits in number
    // numLimit = 2 element array where the first and second elements are the lower and upper limits on each digit respectively
    const returnArray = [];
    const min = Math.floor(numLimit[0]);
    const max = Math.ceil(numLimit[1]);
    for (let i = 0; i < numLength; i++) {
        let currentDigit = Math.floor(Math.random() * (max - min + 1)) + min;
        returnArray.push(currentDigit);
    }
    return +returnArray.join('');
}

// console.log(genRandInt(12, [0, 1]));

function spreadDemo() {
    // The Spread Operator
    // Used to represent all 
}