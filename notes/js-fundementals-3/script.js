// Functions


// Note: functions are always hoisted
myFunction();

// Standard function declaration
function myFunction() {
    console.log('Hello, World!');
}
myFunction();

// Anonymous functions are unnamed and thus can't be reused
// They must be placed in brackets  
(function () {
    console.log('This is an anonymous function');
})

// Unless they're assigned to a vairable
const anonFunction = function () {
    console.log('Anonymous function assigned to a variable');
}
anonFunction();

// Arrow function
// Often used for listener events
const button = document.querySelector('button');
const para = document.querySelector('p');
button.addEventListener('click', () => {
    console.log('Working');
    // Use .value to get text from an input field
    // const input = document.getElementById('user-input').value;
    const input = document.querySelector('#user-input').value;
    para.textContent = input;
})

// Function with default parameter
// Note: parameters are variables that you can pass into a function
// arguments are the values of those parameters
// The function below has a default value for param
function myFunction2(param='This is an argument') {
    // return is what the called function evaluates to
    // It also stops the function and breaks out of its scope
    return param;
    console.log('This will not run');    // Will not run because it follows a return statement
}
console.log(myFunction2()); // 'This is the default'
sampleString = 'This is a user speficied argument'
console.log(myFunction2(sampleString));   // 'This is a user speficied argument'


// isNaN vs Number.isNaN
// Still don't fully understand this

const testArr = [NaN, 'A string', 10, undefined, true, [], 'A string'/2];

// isNaN is useful for checking inputs
// confusing because it checks if something isn't a number, rather than is NaN
const newArr2 = testArr.map((value) => isNaN(value));
console.log(newArr2);   // [true, true, false, true, false, false, true]

// Number.isNaN
// Fixes the problems with isNaN, returns true only if parameter === NaN (?)
const newArr = testArr.map((value) => Number.isNaN(value));
console.log(newArr);    // [true, false, false, false, false, false]

// But NaN === NaN returns false 
const newArr3 = testArr.map((value) => value === NaN);
console.log(newArr3);   // [false, false, false, false, false, false]


// Trying out functions as parameters
function test1(value) {
    // return arr.map( (value) => isNaN(value) );
    return isNaN(value)
}

function test2(arr) {
    return arr.map((value) => Number.isNaN(value));
}

function testingNaN(arr, func) {
    for (let i = 0; i < arr.length; i++ ) {
        console.log(arr[i] + ': ' + func(arr[i]));
    }
}    

testingNaN(testArr, test1);

// I now understand this. isNaN() tries to coerce its arguments to numbers,
// thus arguments with a primitive numeric value (booleans, empty strings/arrays) will
// be coerced into their numeric value. Number.isNaN() doesn't perform this coersion
console.log(+[]);   // 0
console.log(+'');   // 0
console.log(+true); // 1

// sidenote: isNaN exists purely because NaN can't be compaired to anything, even itself
// it is the only datatype that does this
console.log(NaN == NaN);    // false


// Leap year calculator for fun and to prove a point
function isLeapYear(year) {
    if ((year % 4) === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return 'Leap year.';
            } else {
                return 'Not a leap year.';
            }
        } else {
            return 'Leap year.';
        }
    } else {
        return 'Not a leap year.';
    }
}

const startYear = 1970;
for ( let i = 0; i < 100; i++) {
    currentYear = startYear + i;
    console.log(currentYear + ': ' + isLeapYear(currentYear));
}

document.getElementById('fizz-button').addEventListener('click', () =>{
    const inputNumber = document.getElementById('fizz-input').value;
    console.log(typeof +inputNumber)
    if (isNaN(+inputNumber)) {
        alert('Please enter a number');
    } else {
        const fizzArr = [];
        for (let i = 0; i < inputNumber; i++) {
            if (i % 3 == 0  && i % 5 == 0) {
                fizzArr.push('FizzBuzz');
            } else if (i % 3 === 0) {
                fizzArr.push('Fizz');
            } else if (i % 5 === 0) {
                fizzArr.push('Buzz');
            } else {
                fizzArr.push(i);
            }
            
        }
        const fizzStr = fizzArr.join(' ');
        document.getElementById('fizz-output').innerHTML = fizzStr;
    }

})



