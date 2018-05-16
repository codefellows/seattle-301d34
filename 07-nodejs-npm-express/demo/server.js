'use strict';

// Load the express library from node_modules
// Returns a function reference
const express = require('express');

// Instantiate express so we can use its functionality
// Now the constant variable "app" is an object and we can use its methods
// We are going to use methods for routing HTTP requests, which come from the view
const app = express();

// Designate a port to serve our app on
// "process" is in the Node environment, use a port if it is set up, or set your own
// const PORT = process.env.PORT || 3000;
// To set up your own PORT in your terminal type: export PORT=3000
const PORT = process.env.PORT;

// Tell the server which directory to serve files from
app.use(express.static('./public'));

// Set up a route to send a message
app.get('/message', (request, response) => {
  response.send('This will show up in the browser');
  console.log('This will show up in the terminal');
});

// Set up a route to send a file
// Include the root for relative file paths
app.get('/dogs', (request, response) => {
  response.sendFile('/public/dogs.html', {root: '.'});
  response.sendFile('dogs.html', {root: './public'});
});

// Can we perform other methods on the same route?
// Yes, we can have app.post('/dogs') and it will not conflict with app.get('/dogs) because the method is different. The first one in this specific comment responds to $.post('/dogs') from the view and the second one responds to $.get('/dogs) from the view.

// Start the app so it listens for changes
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));