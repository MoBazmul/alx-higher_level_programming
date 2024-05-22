#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Make a GET request to the provided API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    // Print the error object if an error occurred
    console.error(error);
    return;
  }

  // Parse the response body to get the list of tasks
  const tasks = JSON.parse(body);

  // Create an object to store the number of completed tasks by user id
  const completedTasksByUser = {};

  // Iterate over each task
  tasks.forEach(task => {
    if (task.completed) {
      // If the task is completed, increment the count for the corresponding user id
      if (!completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId] = 0;
      }
      completedTasksByUser[task.userId]++;
    }
  });

  // Print the result
  console.log(completedTasksByUser);
});

