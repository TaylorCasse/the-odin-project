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
    const input = document.getElementById('user-input').value;
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