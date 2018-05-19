'use strict';

// many thanks to JB for providing inspiration on this demo

const pg = require('pg');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the client connection to the DB
// This varies depending on your system!

const connectionString = 'postgres://postgres:postgrespassword@localhost:5432/keyarena';
const client = new pg.Client(connectionString);
client.connect();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./public'));

// Base route for serving up HTML
app.get('/', function(request, response) {
  response.sendFile('./public/index.html');
});

// DB routes for CRUD operations
app.get('/events', function(request, response) {
  // TODO: fill in this query to get all the data about events
  // note: client is the postgres client
  client.query('SELECT * FROM events;')
    .then(function(data) {
      response.send(data);
    })
    .catch(function(err) {
      console.error(err);
    });
});

app.post('/events', function(request, response) {
  // TODO: fill in this query
  client.query(` INSERT INTO events (title, date, host, tickets) VALUES ( $1, $2, $4, $3 );`,
    [
      request.body.title,
      request.body.date,
      request.body.tickets,
      request.body.host
    ]
  )
    .then(function(data) {
      response.json(data);
    })
    .catch(function(err) {
      console.error(err);
    });
});

createTable();

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`);
});


////// Create database table helper function //////
function createTable() {
  client.query(`
    CREATE TABLE IF NOT EXISTS events(
      id SERIAL PRIMARY KEY,
      title VARCHAR(256),
      date DATE,
      hostname VARCHAR(256),
      ticketsavailable INT
    );`
  )
    .then(function(response) {
      console.log(response);
    });
}
