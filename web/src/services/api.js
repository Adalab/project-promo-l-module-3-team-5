/* eslint-disable import/no-anonymous-default-export */

const isDevEnviroment = process.env.NODE_ENV === 'development'; // Booleano
const apiURL = isDevEnviroment ? '//localhost:3000/card' : 'https://awesome-cards-locas-torage.herokuapp.com/card';

console.log('isDevEnviroment', isDevEnviroment);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('apiURL', apiURL);

const sendData = (userData) => {
  return fetch(`${apiURL}/card`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {
        success: false,
        error: 'La aplicación ha dado un error, contacta con una especialista',
      };
    });
};

export default {
  sendData: sendData,
};
