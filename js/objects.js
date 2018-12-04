(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {};
person.firstName = "Dorian";
person.lastName = "Wallace";
person.sayHello = function(){
    return `Hello from ${person.firstName} ${person.lastName}!`
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200){
            let discount = shopper.amount * .12;
                discount = discount.toFixed(2);
            // console.log("discount amount is " + discount);
            let leftAfterDiscount = parseInt((shopper.amount - discount) - 200);
            // console.log("Amount left after discount is " + leftAfterDiscount);

            console.log(`${shopper.name} had $${shopper.amount} before discount was applied. The discount was $${discount}, leaving ${shopper.name} with a balance of $${leftAfterDiscount}.`);
        }if (shopper.amount < 200) {
            let newAmount = 0;
            console.log(`${shopper.name} had $${shopper.amount}, but received no discount, leaving him with a balance of $${newAmount}.`)
        }


    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
        //The books array is refactored using function on line 180. The function calls below the array adds new books.
let books = [
        // {
        //     title: "The Storyteller",
        //     author: {
        //         firstName: "Stormy",
        //         lastName: "Gray"
        //     }
        // },
        // {
        //     title: "The Morale",
        //     author: {
        //         firstName: "David",
        //         lastName: "King"
        //     }
        // },
        // {
        //     title: "Thomas Odd",
        //     author: {
        //         firstName: "Dean",
        //         lastName: "Koontz"
        //     }
        // },
        // {
        //     title: "Where the Red Fern Grows",
        //     author: {
        //         firstName: "Delaney",
        //         lastName: "Smith"
        //     }
        // },
        // {
        //     title: "The Red Tent",
        //     author: {
        //         firstName: "Nicole",
        //         lastName: "Lovey"
        //     }
        // }
    ];

    createBook("The Storyteller", "Jodi", "Picoult");
    createBook("The Red Tent", "Anita", "Diamante");
    createBook("The Voice of Knowledge", "Don", "Miguel");
    createBook("Morning Star", "Pierce", "Brown");
    createBook("Twilight", "Stephanie", "Meyers");

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

//Original code that produces book information for each book in array.

// books.forEach(function( book, index){
//     console.log(`Book # ${index + 1}`)
//     console.log(`Book # ${book.title}`)
//     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
//     console.log(`---`);
//
// });

    //Refactored code. Using function on line 197.
books.forEach(function(book, index){
    showBookInfo(index);

});

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


function createBook(bookTitle, name1, name2) {
    let book = {};
    // The first property of the book object is assigned the value of bookTitle for when an aurgument is passed into the function.
        // Then the property of author is given the value of an object.
        // Then two additional values are added to the author object. Creating an object inside of an object.
        //Then the book object is pushed into the books array.
    book.title = bookTitle;
    book.author = {};
    book.author.firstName = name1;
    book.author.lastName = name2;
    books.push(book);
    // console.log(books);
}




        function showBookInfo(index){
//In order to test function separately, console.log should output index-- and an index number should be added to the commented out function call below.
    console.log(`Book # ${index}`)
    console.log(`Book title: ${books[index].title}`)
    console.log(`Author: ${books[index].author.firstName} ${books[index].author.lastName}`)
    console.log(`---`);

}
    // showBookInfo(4)
})();








