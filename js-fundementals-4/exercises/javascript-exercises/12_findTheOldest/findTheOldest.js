const findTheOldest = function(people) {
    let oldistAge = 0;
    let oldistPerson;
    let currentAge;
    for (let person of people) {
        if (person.yearOfDeath === undefined) {
            let currentYear = new Date().getFullYear(); 
            currentAge = currentYear - person.yearOfBirth;
        } else {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (currentAge > oldistAge) {
            oldistAge = currentAge;
            oldistPerson = person;
        }
    }
    return oldistPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
