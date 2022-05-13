// Strings
function stringBasics() {
    const a = "Strings sometimes require \"escape characters\"";
    console.log(a); // Escape character is backspace in JS

    const b = `Here I embed the string from before: ${a}`    // backticks used: template literal
    console.log(b); // Variables can only be embedded into template literals
    const c = "This is a different string.";
    console.log(`${a}${c}`);    // Concatination using template literal
    console.log(a + b);         // Concatination using + operator (template literals are preferred)

    const numericString = "12345";
    console.log(typeof Number(numericString));  // number (converts numeric string to numbers, useful for form inputs)

    const someNumber = 12345;
    console.log(typeof someNumber.toString());  // string (converts numbers to strings)

 
}
// stringBasics();

function eventListenerTest() {
    // Event listener test
    function greet() {
        const name = prompt("What is your name?");
        console.log(`Hello ${name}, nice to meet you!`);

    }
    // This doesn't work (?)
    // const button = document.querySelector('button');
    // button.addEventListener('click', greet);

    // But this does
    document.getElementById("test_button").addEventListener('click', greet);
}

// eventListenerTest();

// Just something I'm trying out
function songScore(songName, artistName, score, maxScore) {
    let preamble;
    let endString;
    if (score <= 3) {
        preamble = `I didn't like the song "${songName}" by ${artistName}.`;
        endString = '... Yikes.';
    } else if (score <= 6) {
        preamble = `I thought "${songName}" by ${artistName} was okay.`;
        endString = '.';
    } else if (score <= 9) {
        preamble = `I really like the song "${songName}" by ${artistName}!`;
        endString = '!';
    } else {
        preamble = `"${songName}" by ${artistName} is absolutely amazing!!`;
        endString = '!!!';
    }
    const output = `${preamble} I gave it a score of ${score / maxScore * 100}%${endString}`;
    // console.log(output);
    return output;
}

// console.log(songScore('End of Me', 'Billy Talent', 9, 10));

function stringMethods() {
    sampleString = "This is a sample string";
    let x = 3; 
    let y = 7;
    console.log(sampleString.slice(x, y));      // "s is" (returns the characters between range, end character not included)
    console.log(sampleString.slice(x, -y));     // "s is a sample" (negative end values are counted backwards from the end of the string, not inclusive)
    console.log(sampleString.substring(x, y));  // "s is" (behaves the same as slice() except without the negative value functionality)
    console.log(sampleString.substr(x, y));     // "s is a " (extracts string of length y counting forward from index x)
}
// stringMethods();


// git course: https://www.udacity.com/course/version-control-with-git--ud123
function stringMethods2() {
    const string = "This is part one of a string, this is part two.";
    
    let newString = string.split(" ");  // Array of space separated words in string
    console.log(newString);

    newString = string.split("");       // Array containing each character in the string
    console.log(newString);

    console.log(string);                // "This is part one of a string, this is part two." Original string is not changed by split().

}
// stringMethods2();


// Source: https://javascript.info/comparison
function comparisons() {
    console.log('2' > 1);   // true (numeric strings are evaluated to numbers when compared to numbers, similar to arithmatic operators)

    // String comparison follows lexicographical order (compared letter by letter)
    console.log('Z' > 'A'); // true
    console.log('Glow' > 'Glee'); // true (G and l are the same, o > e)

    console.log('1' == 1);  // true (== does not account for data type [value comparison])
    console.log('1' === 1); // false (=== does account for type [memory comparison])

    // Interesting quirk
    console.log(null > 0);  // false    
    console.log(null == 0); // false
    console.log(null >= 0); // true. Operators (eg > and >=) evaluate null to 0, but equality check (==) doesn't

    console.log(null == undefined);     // true (null and undefined are only equal to each other)
    console.log(null === undefined);    // false (typeof null = object, typeof undefined = undefined)
}
// comparisons();

// Source: https://javascript.info/logical-operators
// Source: https://www.w3schools.com/js/js_if_else.asp
function logicalOperators(mode) {
    const a = true;
    const b = false;
    const c = 1;
    const d = 0;
    
    if (mode.toUpperCase() === 'OR') {
        // OR operator (a || b)
        console.log(true || false); // true (OR operator)
        console.log(1 || 0 || "");  // 1 (respects truthy/falsy BUT returns the first truthy value, not the boolean)

        let result = b || d || a || c;       
        console.log(result);        // true
        result = b || d || c || a;  
        console.log(result);        // 1
        
        // Good use-case
        function nameGen(firstName, lastName, nickName) {
            return firstName || lastName || nickName || "Anonymous"
        }
        console.log(nameGen()); // Anonymous
        console.log(nameGen("Kyle", "Johnson", "")) // Kyle (returns the first truthy value)

        function shortCircuitEvaluation_OR() {
            true || console.log("not printed");
            false || console.log("printed");
        } 
        shortCircuitEvaluation_OR(); // printed

        console.log(console.log('1') || 2 || console.log(3));   // 1 then 2 (calls to console.log() and alert() evaluate to undefined [falsy])
    
    } else if (mode.toUpperCase() === 'AND') {
        // AND operator (a && b)
        if (a && b) {
            console.log("Both values true");            // not printed
        } else {
            console.log("At least one value false");    // printed
        }

        function shortCircuitEvaluation_AND(value1, value2, value3) {
            let result = value1 && value2 && value3;
            return result
        }
        console.log(shortCircuitEvaluation_AND(a, c, d));       // 0 (returns first falsy value)
        console.log(shortCircuitEvaluation_AND(a, c, true));    // true (returns last value if all are truthy)

        // note: don't replace if statements with AND operators; less readable, bad practice

        console.log(console.log('1') && 1); // 1 then undefined (console.log() executes, then is evaluated to undefined which is then returned [falsy])

    } else if (mode.toUpperCase() === 'NOT') {
        console.log(!true); // false
        console.log(!0);    // true

        console.log(!!true);    // true
        console.log(!!"non empty string")   // true (less verbose way of doing Boolean("non empty string"))

    }
}   
// logicalOperators();

// login checker
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', loginFunction);
loginButton.addEventListener('keypress', test);




let wrongAttemptCount = 0;
const shameArray = [];
function loginFunction() {
    const userName = document.getElementById('username-form').value;
    console.log(userName);
    const passwd = document.getElementById('password-form').value;
    const loginResult = document.getElementById('login-result');
 
    console.log(`Wrong attempts: ${wrongAttemptCount}`);
    if (userName === 'Admin') {
        if (passwd === 'TheMaster') {
            loginResult.textContent = `Login successful.\nWelcome, ${userName}!`;
            // alert(`Login successful.\nWelcome, ${userName}!`);
        } else if (passwd) {
            loginResult.textContent = `Wrong password, "${userName}".`;
            wrongAttemptCount++;
            if (wrongAttemptCount > 15) {
                shameArray.push(':/   ');
                const shameString = shameArray.join('');
                console.log(shameString);
                loginResult.innerHTML = shameString;
            } else if (wrongAttemptCount > 10) {
                loginResult.textContent = `Dude. Stop.`;    
            } else if (wrongAttemptCount > 5) {
 
                loginResult.textContent = `STILL the wrong password, "${userName}" :/`;
            }
            // alert(`Wrong password, "${userName}"`);
        } else {
            alert(`Please enter your password`);
        }
    } else {
        alert("I don't know you.");
    }
}
function test(event) {
    if (event.key === 'Enter') {
        loginFunction();
    }
}







// Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals


const weatherSelect = document.getElementById('weather');  // Assigns id="weather" to weatherSelect    
// const weatherSelect = document.querySelector('select');
const weatherAdvice = document.getElementById('weather-advice');
// const weatherAdvice = document.querySelector('p');
weatherSelect.addEventListener('change', setWeather);   // Runs setWeather() when a change event on id="weather" occurs
                                                        // Do NOT pass the function's brackets 
function setWeather() {
    const choice = weatherSelect.value;     // Returns value of the element's text field
    if (choice === 'sunny') {
        weatherAdvice.textContent = 'It is nice and sunny outside. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'raining') {
        weatherAdvice.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';

    } else if (choice === 'snowing') {
        weatherAdvice.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
            
    } else if (choice === 'overcast') {
        weatherAdvice.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        weatherAdvice.textContent = '';
    }
}
