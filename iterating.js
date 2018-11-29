
(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ["Justin", "Sarah", "Dorian", "Jennifer"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function(name) {
    console.log(name);
});
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
let familyMembers = ["Dorian", "Tina", "Adam", "Alexis", "Chelsea"];

    familyMembers.forEach(function(name) {
        if (name === familyMembers[0])
        console.log(name);
    });


    familyMembers.forEach(function(name) {
        if (name === familyMembers[1])
            console.log(name);
    });

    familyMembers.forEach(function(name) {
        if (name === familyMembers[4])
            console.log(name);
    });


})();
// Exercise 1:
    let numArray = [];
function oneHundred() {
    for (let num = 1; num < 101; num++) {
        numArray.push(num);
    }console.log(numArray);
}
oneHundred()

// Exercise2:
function reverse() {
    let fruits = ["Kiwi", "Mango", "Apple", "Figs"];
    let myFruits = fruits.reverse();
    console.log(`New array: ${myFruits}`);
    console.log(`Original array: ${fruits}`);
}
reverse()

// Exercise3:
function sumAll(num1, num2) {
    return num1 + num2;

}
function sumHundred(){
    console.log(numArray.reduce(sumAll));
}
sumHundred()

// Exercise4:
function multiplyAll(num1, num2) {
    let multiplyTotal = num1 * num2;
    return parseInt(multiplyTotal);
}
function multiplyHundred(){
    console.log(numArray.reduce(multiplyAll));
}
multiplyHundred()