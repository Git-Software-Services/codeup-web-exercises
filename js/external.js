
"use strict"

console.log("Hello from external JavaScript");
alert ("Welcome to my website!");
var userFavoriteColor = prompt("What is your favorite color?");
alert ( "Great! " + userFavoriteColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
// how much will you have to pay?

var favoriteMovie1 = prompt("Name one of three disney movies");
var favoriteMovie2 = prompt("Name two of three disney movies");
var favoriteMovie3 = prompt("Name three of three disney movies");

var threeDayRental = 3;
var fiveDayRental = 5;
var oneDayRental = 1;

var pricePerDay = 3;
var total = (threeDayRental *  pricePerDay)
+ (fiveDayRental * pricePerDay) + (oneDayRental * pricePerDay);

alert("The cost of renting " + favoriteMovie1 + " for three days will be $" + 3 * 3 + ". The cost of renting " +favoriteMovie2 +
    " will be $" + 5 * 3 + " . The cost of  renting " + favoriteMovie3 + " will be $" + 1 * 3 + " Bringing your total to... $" + total.toFixed(2));



//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
// rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googlePay = prompt("If you worked at Google what would your dream pay per hour be?");
googlePay = parseFloat(googlePay);
var amazonPay = prompt("If you worked at Amazon what would your dream pay per hour be?");
amazonPay = parseFloat(amazonPay);
var facebookPay = prompt("If you worked at Facebook what would your dream pay per hour be?");
facebookPay = parseFloat(facebookPay);

alert ( "Great! Now let's choose the hours you'll work for each company each week.");

var googleHrs = prompt("How many hours would you work at Google?");
var amazonHrs = prompt("How many hours would you work at Amazon?");
var facebookHrs = prompt("How many hours would you work at Facebook?");

var total = (googlePay * googleHrs) + (amazonPay * amazonHrs) + (facebookPay * facebookHrs);
total = total.toFixed(2);

alert ( "Wow!!! You would receive $" + total + " at the end of the week! What are you waiting for??");

// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her
// current schedule.
 var isClassFull = false;


//     A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium
// members do not need to buy a specific amount of products.