#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const wedgeAntillesId = 18;

// Make a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    // Print the error object if an error occurred
    console.error(error);
    return;
  }
  
  // Parse the response body to get the list of films
  const films = JSON.parse(body).results;
  
  // Count the number of films where Wedge Antilles is present
  const count = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)).length;
  
  // Print the count
  console.log(count);
});

