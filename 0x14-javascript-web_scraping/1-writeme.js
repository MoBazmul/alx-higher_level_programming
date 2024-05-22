#!/usr/bin/node


const fs = require('fs');

// Get the file path and the string to write from the command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Write the string to the file in utf-8 encoding
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    // Print the error object if an error occurred
    console.error(err);
    return;
  }
  // Print a success message
  console.log('File written successfully');
});

