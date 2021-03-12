const express = require("express");
const cors = require("cors");
const api = require("../.././web/src/services/api.js");

const server = express();

// set express middleware
//   we must always put these lines, until we know what they do, pringuis
//   more info: https://expressjs.com/es/guide/using-middleware.html
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const staticServerPath = "../.././web/public"; // relative to the root of the project
server.use(express.static(staticServerPath));

// API request > GET > http://localhost:3000/users
// server.get('/users', (req, res) => {
//   const response = {
//     users: [{ name: 'Sofía' }, { name: 'María' }],
//   };
//   res.json(response);
// });

// API request > POST > http://localhost:3000/card
server.post("/card", (req, res) => {
  console.log(`Creating the user in database with user name: "${req.body}"`);
  api.sendData(userData).then(data=>{return data})
  const card = () => {
    if (data !== undefined) {
      console.log(card);
      res.json({
        error: false,
        data: data.name,
      });
    }
    else {
      // Si el usuario no existe devuelvo un error
      res.status(404).json({
        error: 'undefined data',
        message: 'undefined data'
      });
    }
  };

  // console.log(`Creating the user in database with user name: "${req.body}"`);
  // const response = {
  //   result: `Card created: ${req.body.cardURL}`,
  // };
  // res.json(response);
});
