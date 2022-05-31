
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
}
arraysDemo();





