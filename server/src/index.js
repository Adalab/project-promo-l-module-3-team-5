const express = require('express');
const cors = require('cors');
const api = require('../.././web/src/services/api.js');

// create server
const server = express();

// set express middleware
//   we must always put these lines, until we know what they do
//   more info: https://expressjs.com/es/guide/using-middleware.html
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// STATIC SERVER: listen files in public folder
const staticServerPath = '../.././web/public'; // relative to the root of the project
server.use(express.static(staticServerPath));

// API: listen fetch requests

// API request > GET > http://localhost:3000/users
server.get('/users', (req, res) => {
  const response = {
    users: [{ name: 'Sofía' }, { name: 'María' }],
  };
  res.json(response);
});

// API request > POST > http://localhost:3000/card
server.post('/card', (req, res) => {
  // console request body params
  console.log(`Creating the user in database with user name: "${req.body}"`);
  const response = {
    result: `Card created: ${req.body.cardURL}`,
  };
  res.json(response);
});
