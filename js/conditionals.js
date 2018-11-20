"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// var userNumberOpt = confirm('Would you like to enter a number?');
//
// if (true) {
//     var userNumber = parseFloat(prompt("What is your number?"))
//     var userTotal =  userNumber + 100;
//     if (userNumber % 2 === 0) {
//             alert("Your number is an even number!")
//         }else {alert("Your number is an odd number!")};
//         alert("Your number plus 100 is " + userTotal)
//         if (userNumber < 0) {
//             alert("Your number is negative.")
//         }else {alert("Your number is positive!")
//         }
// } else {
//     alert("What you've entered is NOT a number!");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color === "red") {
//         alert(color + " is the color of blood!");
//     } else if (color === "orange") {
//         alert(color + " is the color of fire!");
//     } else if (color === "yellow") {
//         alert(color + " is the color of sunflowers!");
//     } else if (color === "green") {
//         alert(color + " is the color of grass!");
//     } else if (color === "blue") {
//         alert(color + " is the color of the sky!");
//     } else if (color === "indigo") {
//         alert(color + " is the color of something else!");
//     } else if (color === "violet") {
//         alert(color + " is the color of indigo but nicer!");
//     } else {
//         alert(color + " is not a color I recognize.");
//     }
// }
    //(analyzeColor(randomColor);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // console.log(analyzeColor(randomColor));

// var color= prompt("What is your favorite color?");

// function analyzeColor(color) {
//     switch (color) {
//         case "red":
//             alert(color + " is the color of blood!");
//             break;
//         case "orange":
//             alert(color + " is the color of fire!");
//             break;
//         case "yellow":
//             alert(color + " is the color of sunflowers!");
//             break;
//         case "green":
//             alert(color + " is the color of grass!");
//             break;
//         case "blue":
//             alert(color + " is the color of the sky!");
//             break;
//         case "indigo":
//             alert(color + " is the color of something else");
//             break;
//         case "violet":
//             alert(color + " is the color of indigo but nicer!");
//             break;
//
//     }
// }
// analyzeColor(color);


    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    /**

     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var beforeDiscount = parseFloat(prompt("What is your total bill? Ex. 20.00;"));


    function calculateTotal(num) {
    // var luckyNumber = parseFloat(prompt("Choose a lucky number from 0 to 5."));
    var total;

    switch (luckyNumber) {
        case 0 :
            alert("Sorry, you chose " + luckyNumber + ". " + "you do not receive a discount this time around, try again next time.");
            break;
        case 1 :
            total = beforeDiscount - (beforeDiscount * .10);
            alert("You chose " + luckyNumber + ". " + "You get a 10% discount! That brings your total to $" + total);
            break;
        case 2 :
            total = beforeDiscount - (beforeDiscount * .25);
            alert("You chose " + luckyNumber + ". " + "You get a 25% discount! That brings your total to $" + total);
            break;
        case 3 :
            total = beforeDiscount - (beforeDiscount * .35);
            alert("You chose " + luckyNumber + ". " + "You get a 35% discount! That brings your total to $" + total);
            break;
        case 4 :
            total = beforeDiscount - (beforeDiscount * .50);
            alert("You chose " + luckyNumber + ". " + "You get a 50% discount! That brings your total to $" + total);
            break;
        case 5 :
            alert("You chose " + luckyNumber + ". " + "You get everything for FREE!!!");
            break;
    }
}
calculateTotal(luckyNumber);