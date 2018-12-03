// planets-array
// (function(){
//     "use strict";
//
//     var planets = [
//         'Mercury',
//         'Venus',
//         'Earth',
//         'Mars',
//         'Jupiter',
//         'Saturn',
//         'Uranus',
//         'Neptune'
//     ];
//
//     /**
//      * TODO:
//      * Read each console log below, and write some javascript code to perform
//      * the step that it describes
//      */
//
//     console.log('Adding "The Sun" to the beginning of the planets array.');
//     planets.unshift("The Sun");
//     console.log(planets);
//
//     console.log('Adding "Pluto" to the end of the planets array.');
//     planets.push("Pluto");
//     console.log(planets);
//
//     console.log('Removing "The Sun" from the beginning of the planets array.');
//     planets.shift();
//     console.log(planets);
//
//     console.log('Removing "Pluto" from the end of the planets array.');
//     planets.pop();
//     console.log(planets);
//
//     console.log('Finding and logging the index of "Earth" in the planets array.');
//     console.log(planets.indexOf("Earth"));
//
//     console.log("Reversing the order of the planets array.");
//     planets.reverse();
//     console.log(planets);
//
//     console.log("Sorting the planets array.");
//     planets.sort();
//     console.log(planets);
//
//
// })();


// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2

    var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";


var splitReportContents = reportContents.split(", ");
console.log(splitReportContents);

// replace \n with <br>

let stringReplaceFrom = /\n/g;
let stringReplaceTo = '<br>';
let joinReportContents = splitReportContents.join(',').replace(stringReplaceFrom,stringReplaceTo).split();
// console.log(joinReportContents);

// replace , with " "

let stringReplaceFrom1 = /,/g;
let stringReplaceTo2 = ', ';
let spaceReportContents = joinReportContents.join(',').replace(stringReplaceFrom1,stringReplaceTo2).split();
// console.log(joinReportContents);


document.getElementById('string').innerHTML = spaceReportContents;

// let arrayOfArrays = [];


splitReportContents.splice(0, 4);
console.log(splitReportContents)








// document.getElementById('totals').innerHTML = spaceReportContents;








