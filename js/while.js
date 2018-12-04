"use strict"
// While Loops
var i = 2;
while (i < 65536) {
    console.log(i);
    i = i * 2;
}


var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var numberSold = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - numberSold;
    console.log(`${numberSold} cones sold...`)
    if (numberSold > allCones){
        console.log(`Cannot sell you ${numberSold} cones, I only have ${allCones}!`)
        break;
    }
    console.log(`I have ${allCones} left to sell`)
}while (allCones > 0)
console.log('Yay! I sold them all!')