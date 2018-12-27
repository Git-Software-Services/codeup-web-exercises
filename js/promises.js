

"use strict";


//
// const wait = number => {
//     return new Promise((resolve, reject) => {
//         if (number > 0) {
//             setTimeout(function () {
//                 console.log(`You'll see this after ${number} seconds!`)
//             },number *1000);
//             resolve();
//         } else {
//             reject(console.log("This rejected!"));
//         }
//     });
// }
//
// wait(2);
// wait(5);

// Teachers Answer__________________________>

// const wait =delay => new Promise(function(resolve, reject) {
//         setTimeout(resolve, delay)
//         });
// wait(1000).then(() => console.log('You\'ll see this after one second))
// wait(3000).then(() => console.log('You\'ll see this after three second))

//_________________________________________________________________


function getMostRecentCommitDate(githubUsername) {


    const API_TOKEN = '3fdee4dc6bfb4b2b486a498e59b55693b18d162f';
    var input = '';
    var githubUsername = 'Git-Software-Services'
    console.log(input)
    const url = `https://api.github.com/users/${username}/events`

    const fetchOptions = {
        headers: {'Authorization': `token ${API_TOKEN}`}
    }
//Error checking function...
    const checkResponseForErrors = response => {
        console.group('checkResponseForErrors')
        console.log(response)
        console.groupEnd()
        if (response.status !== 200) {
            return Promise.reject(response);
        }
        return Promise.resolve(response);
    }
// Parse Response as Json...
    const parseResponseAsJson = response => {
        console.group('parseResponseAsJson')
        console.log(response)
        console.groupEnd()
        const jsonResponse = response.json();
        return jsonResponse;
    }

//Log data function...
    function logData(data) {
        console.group('logData')
        console.log(data);
        console.groupEnd();
    }

//fetch the Json function...
    function fetchJson(url) {
        console.log(githubUsername);
        return fetch(url, fetchOptions)
            .then(checkResponseForErrors)
            .then(parseResponseAsJson)
    }

//get the second element in the json object that is returned...
    const getSecondElement = ([first, second]) => first;

//get the latest commit from that element...
    function getLastCommit(data) {
        return data.created_at;
    }


    $('#submit').click(function () {
        fetchJson(url)
            .then(getSecondElement)
            .then(getLastCommit)
            .then(logData);
    });

}

document.querySelector('submit')
submit.addEventListener('click', function(e){
   const userInput = document.getElementById('UserInput')
    const username = UserInput.value;
    console.log(' The username is: '+ username)
        .then(commitDate => {
            const output = document.querySelector('#output')
            output.innerHTML = `THe last commit for ${username} was ${commitDate}`
        })
})
