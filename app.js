/**
 * file: app.js
 * Description: File responsible for running the application and setting up the server
 * local.
 * Author: gabirisushi
 */

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('App - Intro Star Wars');
});

// Start the server on port 3000
app.listen(3000, () => console.log('http://localhost:3000/'));
