#!/usr/bin/node

const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Make a GET request to the provided URL
request(url, (error, response, body) => {
  if (error) {
    // Print the error object if an error occurred
    console.error(error);
    return;
  }
  // Print the status code of the response
  console.log(`code: ${response.statusCode}`);
});

