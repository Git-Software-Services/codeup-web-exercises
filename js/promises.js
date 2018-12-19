

"use strict";



    // var wait = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //         resolve('Looks like Im getting this stuff!');
    //     }, 1000);
    // });
    //
    // wait.then(function (string) {
    //     console.log(string);
    // });
    //

//_________________________________________________________________



const API_TOKEN = 'd1d40408c6a7fd24cf036165d191459f833c998b';
var input ='';
var githubUsername = 'Git-Software-Services'
console.log(input)
const url = `https://api.github.com/users/${githubUsername}/events`

const fetchOptions = {
    headers: {'Authorization': `token ${API_TOKEN}`}
}

const checkResponseForErrors = response => {
    console.group('checkResponseForErrors')
    console.log(response)
    console.groupEnd()
    if (response.status !== 200) {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
}

const parseResponseAsJson = response => {
    console.group('parseResponseAsJson')
    console.log(response)
    console.groupEnd()
    const jsonResponse = response.json();
    return jsonResponse;
}


function logData(data) {
    console.group('logData')
    console.log(data);
    console.groupEnd();
}

function fetchJson(url) {
    console.log(githubUsername);
    return fetch(url, fetchOptions)
        .then(checkResponseForErrors)
        .then(parseResponseAsJson)
}

const getSecondElement = ([first, second]) => first;

function getLastCommit(data){
    return data.created_at;
}


$('#submit').click(function(){
    fetchJson(url)
        .then(getSecondElement)
        .then(getLastCommit)
        .then(logData);
})

