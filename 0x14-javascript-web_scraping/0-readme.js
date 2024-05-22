#!/usr/bin/node

const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the file content in utf-8 encoding
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // Print the error object if an error occurred
    console.error(err);
    return;
  }
  // Print the file content if successful
  console.log(data);
});

