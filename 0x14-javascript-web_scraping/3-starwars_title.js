#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the API URL using the provided movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    // Print the error object if an error occurred
    console.error(error);
    return;
  }
  
  // Parse the response body to get the movie data
  const movieData = JSON.parse(body);
  
  // Print the title of the movie
  console.log(movieData.title);
});

