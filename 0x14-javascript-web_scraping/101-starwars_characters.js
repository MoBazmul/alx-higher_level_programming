#!/usr/bin/node

const request = require('request');

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the API URL using the provided Movie ID
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

  // Get the list of character URLs from the movie data
  const characterUrls = movieData.characters;

  // Function to fetch and print each character's name in order
  const fetchCharacterNames = (urls, index) => {
    if (index >= urls.length) {
      return;
    }
    request(urls[index], (charError, charResponse, charBody) => {
      if (charError) {
        console.error(charError);
        return;
      }

      // Parse the response body to get the character data
      const characterData = JSON.parse(charBody);

      // Print the character name
      console.log(characterData.name);

      // Fetch the next character in the list
      fetchCharacterNames(urls, index + 1);
    });
  };

  // Start fetching character names from the first character in the list
  fetchCharacterNames(characterUrls, 0);
});

