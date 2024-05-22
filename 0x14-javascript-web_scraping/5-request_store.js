#!usr/bin/node

const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the provided URL
request(url, (error, response, body) => {
  if (error) {
    // Print the error object if an error occurred
    console.error(error);
    return;
  }

  // Write the response body to the file in utf-8 encoding
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      // Print the error object if an error occurred during writing
      console.error(err);
      return;
    }
    // Optionally, you can print a success message or nothing at all
    console.log(`Content successfully saved to ${filePath}`);
  });
});

