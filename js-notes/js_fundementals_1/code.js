// Script for coding along with TOP JS course
// and also to act as notes

// TOP Fundementals Part 1
// Printing
function printing() {
    console.log("Printing");
    console.log("Hello World");
    console.log(23 + 97);
    console.log(1 + 2 + 3 + 4 + 5 + 6);
    console.log((4 + 6 + 9) / 77);
}
// printing();

// Declaration and assignment
function declarationAndAssignment() {
    console.log("Declaration and assignment");
    const a = 10;
    console.log(a);
    9* a;
    const b = 7 * a;
    console.log(b);
}
// declarationAndAssignment();

// Arithmatic
function Arithmatic() {
    console.log("Arithmatic");
    const max = 57;
    const actual = max - 13;
    const percentage = actual / max;
    console.log(percentage);
}
// Arithmatic();


//Intiger precision
function intigerPrecision() {
    console.log("Intiger precision");
    const c = 999999999999999;    // 15 digits, prints normally
    console.log(c);
    const d = 9999999999999999;   // > 15 digits, accuracy loss
    console.log(d);
}
// intigerPrecision();

// Floating precision
function floatingPrecision() {
    console.log("Floating precision");
    const x = 0.2 + 0.1;
    console.log(x);     // Value is slightly off
    const y = (0.2 * 10 + 0.1 * 10) / 10;
    console.log(y);     // Value is correct
}
// floatingPrecision();

// Adding Numbers and Strings
function addingNumbersAndStrings() {
    console.log("Adding numbers and strings")
    console.log(10 + 10 + "20");        // 2020 (left to right, addition followed by concatination)
    console.log("20" + 10 + 10);        // 201010 (left to right,  concatination then concatination)
    console.log(10 * "10");             // 100 (numeric strings converted to numbers by all operators except +)
    console.log("10" / 10);             // 1 (... in any order)
    const a = 10 / "string";              
    console.log(a);                      // NaN
    console.log((a + 1 - 2) * 5);       // NaN (any operation involving NaN and a number evaluates to NaN)
    console.log("string" + a);          // stringNaN
    typeof NaN;                         // Number (weird, but true)
}
// addingNumbersAndStrings();

function infinity() {     // Infinity is a reserved word (that was a headache)
    console.log(1 / 0);  // Infinity
    console.log(Infinity * 10);  //
    
}
// infinity();

function incrimentAndDecrement() {
    let a = 1;
    console.log(a++);   // 1 (suffixed increment operator assigns updated value after print statement)
    console.log(a);     // 2 (increment operator applied in last line)
    console.log(++a);  
    a;
}

incrimentAndDecrement();