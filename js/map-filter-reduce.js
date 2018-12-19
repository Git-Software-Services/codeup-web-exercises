"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userMultipleLanguages = users.filter(function(user){
    return user.languages.length > 2

});

const userEmailAddresses = users.map(function(userEmail){
    return userEmail.email;
});

const userYearlyAverage = users.reduce(function(counter, user)  {
    return counter + user.yearsOfExperience / users.length;
}, 0);

const longestUserEmail = users.reduce(function(longestEmail, user) {
    if (longestEmail.length < user.email.length){
        return user.email;
    }return longestEmail;
}, '');

var instructors = users.reduce(function(counter, instructor){
    return counter + ` ${instructor.name}, `;
}, ',');

var instructorNames = users.reduce((stringMessage, user, index) => {

    debugger
    if (index === users.length - 1) {
        return `${stringMessage} ${user.name}.`
    }
    return `${stringMessage} ${user.name},`
},'your instructors are: ')