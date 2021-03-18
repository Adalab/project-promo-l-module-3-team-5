const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// ----------------------
// CONFIGURATION SECTION
// ----------------------

const server = express();

// set express middleware
server.use(cors());
server.use(express.json({ limit: '10mb' }));

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

// ------------------
// ENDPOINT SECTION
// ------------------

const staticServerPath = './public'; // relative to the root of the project
server.use(express.static(staticServerPath));

//poner una función por cada método/ruta que se quiere que el servidor escuche. Escucha tres rutas:
// 1.raiz ('http:localhost/') === index.html GET (lo usa el navegador pidiendo la página)
// 2. http:localhost/card/<numerito> GET
// 3. http:localhost/card/ POST (se utilizan para la api, desde el fetch en JS)
// http:localhost/404-not-found.html ¿?¿?¿?¿?¿?¿?¿?

// API request > GET > http://localhost:3000/????
server.get('/card/:id', (req, res) => {
  // req, desde donde nos están mandando los datos: URL que nos está llamando
  const userID = req.params.id;
  // get user data
  const query = db.prepare(`SELECT * FROM cards WHERE id=?`);
  const users = query.get(userID); //sustituirse por el id de la url de params.match.id

  // response with rendered template
  if (users) {
    res.render('./pages/card', users);
  } else {
    res.render('./pages/card-not-found');
  }
});

// API request > POST > http://localhost:3000/card
server.post('/card', (req, res) => {
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
    // save to db
    const stmt = db.prepare(
      'INSERT INTO cards (palette, name, job, email, photo, phone, linkedin, github) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    const result = stmt.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.email,
      req.body.photo,
      req.body.phone,
      req.body.linkedin,
      req.body.github
    );

    result.lastInsertRowid;

    const isDevEnviroment = process.env.NODE_ENV === 'development';
    const cardURL = isDevEnviroment ? '//localhost:3000' : 'https://awesome-cards-locas-torage.herokuapp.com/';
    response.success = true;
    response.cardURL = cardURL + 'card/' + result.lastInsertRowid;
  }
  // ¿cómo le insuflamos a la base de datos todos estos datos?
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
