const express = require('express');
const app = express();
const data = require('./data.json'); // Assuming data.json is in the same directory
//ADDED CORS CONFIG

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://quentincloudsnow.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// ... rest of your app's routes and logic
//Quentin to add error handling

app.get('/checkUser', (req, res) => {
  const { firstname, lastname, dateofbirth } = req.query;

  const userExists = data.some(user =>
    user.firstname === firstname &&
    user.lastname === lastname &&
    user.dateofbirth === dateofbirth
  );
const response = {
    code: userExists ? 0 : 1,
    message: userExists ? 'User exists' : 'User does not exist'
  };

  res.status(200).json(response);
});

app.listen(3000, () => {
          console.log('Server is running on port 3000');
});
