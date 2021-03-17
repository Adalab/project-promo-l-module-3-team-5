const express = require('express');
const cors = require('cors');
// const api = require('../.././web/src/services/api.js');
const Database = require('better-sqlite3');
const server = express();

// set express middleware
server.use(cors());
server.use(express.json());

server.set('view engine', 'ejs');

// init express aplication
const serverPort = process.env.Port || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/data/cards.db', {
  // this line log in console all data base queries
  verbose: console.log,
});

const staticServerPath = '../public'; // relative to the root of the project
server.use(express.static(staticServerPath));

// API request > GET > http://localhost:3000/users
server.get('/card/:id', (req, res) => {
  // req, desde donde nos están mandando los datos: URL que nos está llamando
  console.log(req.params.id);
  const userID = req.params.id;
  // get user data
  const query = db.prepare(`SELECT * FROM cards WHERE id=?`);
  const users = query.get(userID); //sustituirse por el id de la url de params.match.id

  // response with rendered template
  if (users) {
    res.render('../views/pages/card', users);
  } else {
    res.render('../views/pages/card-not-found');
  }
});

// API request > POST > http://localhost:3000/card
server.post('/card', (req, res) => {
  console.log(`Creating the user in database with user name: "${req.body}"`);

  const response = {};

  if (!req.body.name || req.body.name === '') {
    response.success = false;
    response.error = 'Comprueba que has rellenado tu nombre.¡Tú puedes!';
  } else if (!req.body.job || req.body.job === '') {
    response.success = false;
    response.error = 'Comprueba que has rellenado tu puesto.¡Que el mundo sepa hasta dónde has llegado!';
  } else if (!req.body.email || req.body.email === '') {
    response.success = false;
    response.error = 'Comprueba que has rellenado tu email.¡No te vamos a llenar de SPAM!';
  } else if (!req.body.phone || req.body.phone === '') {
    response.success = false;
    response.error = 'Comprueba que has rellenado tu teléfono o contacto de emergencia AA.';
  } else if (!req.body.linkedin || req.body.linkedin === '') {
    response.success = false;
    response.error = 'Comprueba que has rellenado tu usuaria de Linkedin.¡Que suban esas vistas de perfil!';
  } else if (!req.body.github || req.body.github === '') {
    response.success = false;
    response.error = 'Comprueba que has rellenado tu usuaria de Linkedin.¡Que suban esas estrellas!';
  } else if (!req.body.photo || req.body.photo === '') {
    response.success = false;
    response.error = 'Comprueba que has subido tu selfie en el espejo del baño.';
  } else {
    const isDevEnviroment = process.env.NODE_ENV === 'development';
    const cardURL = isDevEnviroment ? '//localhost:3000' : 'https://awesome-cards-locas-torage.herokuapp.com/';
    response.success = true;
    response.cardURL = cardURL + 'card/:id';
    // `${cardURL}/card/:id`
  }
  // ¿cómo le insoflamos a la base de datos todos estos datos?
  res.json(response);
});

// ---------------------
//   NOT FOUND SECTION
// ---------------------

// server.get('*', (req, res) => {
//   // relative to this directory
//   const notFoundFileRelativePath = '../public/404-not-found.html';
//   const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
//   res.status(404).sendFile(notFoundFileAbsolutePath);
// });
