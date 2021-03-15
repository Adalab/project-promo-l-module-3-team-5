/* eslint-disable import/no-anonymous-default-export */
const sendData = (userData) => {
  return fetch('http://localhost:3000/card', {
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
        error: 'Que te peines',
      };
    });
};

export default {
  sendData: sendData,
};
