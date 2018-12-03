(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

        // Replace ',' with '<br>'
    let stringReplaceFrom = /,/g;
    let stringReplaceTo = '<br>';
    let planetsJoin = planetsArray.join(',').replace(stringReplaceFrom,stringReplaceTo).split();
    console.log(planetsJoin);

    console.log(planetsJoin.unshift());


let brake = planetsJoin.join("<br>");
console.log(brake);



// BONUS

let htmlString = "<ul><li>";

htmlString += planetsArray.join("</li><li>");

htmlString += "</li></ul>";

console.log(htmlString);


})();

