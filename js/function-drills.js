"use strict";
// Make a function named isOdd(number)

// var number = prompt("Give me an even number");
// function isOdd(number)  {
//     if (!NaN && number % 2 !== 0)   {
//         alert("That is not an even number!")
//     }else {
//         alert("The even number you chose is " + number)
//     }
// }
// isOdd(number);

// Make a function named isEven(number)

// var number = prompt("Give me an odd number");
// function isEven(number) {
//     if (!NaN && number % 2 !== 0)   {
//         alert("The odd number you chose is " + number)
//     }else {
//         alert("That is not an odd number!")
//     }
// }
// isEven(number);
// Make a function named identity(input) that returns the input exactly as provided.

// var input = prompt("Type whatever you want and I'll spit it back out at you!");
// function identity(input)    {
//     alert(input);
// }
// identity(input);

//     Make a function named isFive(input)

// var num = parseFloat(prompt("Enter the number 5"));
// function isFive(input) {
//     if (num === 5) {
//         alert("That is correct!");
//     }else alert("That is not the number I asked for...");
// }
// isFive(num);

// Make a function named addFive(input) that adds five to some input.

// var num = parseInt(prompt("Choose a number and I'll add five to it."));
//
// function addFive(input) {
//     num += 5;
//     alert(num);
// }
// addFive(num);

//     Make a function named isMultipleOfFive(input)


// Make a function named isThree(input)
// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive(input)
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// Make a function named isTrue(boolean)
// Make a function named isFalse(boolean)
// Make a function named isTruthy(input), remember that values other than true will behave like true
// Make a function named isFalsy(input), remember that values other than false behave like false
// Make a function named isVowel(letter)
// Make a function named isConsonant(letter)
// Make a function named isCapital(letter)
// Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if the input is not zero
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named trim(string) that removes empty spaces before and after the input.
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.


// var input1 = parseFloat(prompt("Enter a number between 1 and 99."));
// var input2 = parseFloat(prompt("Re-enter the same number."));
//
// function areIdentical(num1, num2)     {
//     if (isNaN(num1)){
//         alert("That is not a number!")
//     } else if (isNaN(num2)){
//         alert("That is not a number!")
//     }else if (num1 == num2 && num1 === num2) {
//         alert("You have entered matching numbers!")
//     }else {alert("You have re-entered a different number!")}
// }
// areIdentical(input1, input2);




//     Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR

// Write a function called reverseString(string) that reverses a string

// var userResponse = prompt("Write a sentence about anything.");
//
// function reverseString(string) {
//     alert(string.split("").reverse().join(""));
// }
// reverseString(userResponse);

// Make a function named absoluteValue(number) that returns the absolute value of a number.
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

// Make a function called returnTwo() that returns the number 2 when called
//

function returnTwo() {
    return 2;
}
returnTwo();

// Test this function with

console.log(returnTwo());
//
//     Make a function called sayHowdy() which console.logs the string “Howdy!”
//
// Test this function by directly calling sayHowdy()
//
// Remember this function does not need a defined return value

function sayHowdy() {
    console.log("Howdy!")
}
sayHowdy();
//
// Make a function called returnName() that returns the string of your name
//
// Test this function with console.log(returnName())

function returnName(name) {
    return name;
}
console.log(returnName("Dorian"));
//
//     Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with console.log(addThree(5))
//

function addThree(num) {
    return num + 3;
}
console.log(addThree(5));

//     Make a function called sayString() which returns the string input passed in.
//
// Test this function with console.log(sayString('codeup'))

function sayString(input) {
    return input;
}
console.log(sayString('codeup'));

//Write a function called identity(input) that takes in an argument called input and returns that input.

function identity(input)    {
    return input;
}
console.log(identity("What up!"));
// //
// //     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.

function getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
console.log(getRandomNumber(3, 22));
// //
// // Write a function called first(input) that returns the first character in the provided string.

function first(input) {
    return input.charAt();
}
console.log(first("Oh Crap!"));
// //
// //     Write a function called last(input) that returns the last character of a string

function last(input) {
    return input.charAt(input.length-1);
}
console.log(last("Oh Crap!"));
// //
// // Write a function called rest(input) that returns everything but the first character of a string.
// //
// //     Write a function called reverse(input) that takes a string and returns it reversed.
// //
// //     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
// //
// //     Write a function called count(input) that takes in a string and returns the number of characters.
// //
// //     Write a function called add(a, b) that returns the sum of a and b
// //
// // Write a function called subtract(a, b) that return the difference between the two inputs.
// //
// //     Write multiply(a, b) function that returns the product
// //
// // Write a divide(numerator, denominator) function that returns a divided by b
// //
// // Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
// //
// // Write the function square(a) that takes in a number and returns the number multiplied by itself.
// //
// //     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// //
// // Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are t