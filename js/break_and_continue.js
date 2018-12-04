"use strict"
// Break and Continue

function isNumeric (num) {
    return (!isNaN(parseFloat(num)))
}

let userResponse ;
do {
    userResponse = parseFloat(prompt("Choose a number between 1 and 50."));
//Keep asking until answer is good

    if (isNumeric(userResponse)
        && userResponse % 2 === 1
        && userResponse >= 1
        && userResponse <= 50)
        break;
}while(true)
        console.log(userResponse);

    for (var i = 1; i <= 50; i += 2) {
        if (i === userResponse) {
            console.log(`Yikes! Skipping the number: ${i}`);
            continue;
        }
        console.log(`Here is an odd number: ${i}`)
    }


