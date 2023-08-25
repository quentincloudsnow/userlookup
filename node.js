const express = require('express');
const app = express();
const data = require('./data.json');

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

app.get('/checkUser', (req, res) => {
  const { firstname, lastname, dateofbirth } = req.query;

  const user = data.find(user =>
    user.firstname === firstname &&
    user.lastname === lastname &&
    user.dateofbirth === dateofbirth
  );

  if (user) {
    const response = {
      code: 0,
      message: 'User exists',
      user: {
        guest_title: user.guest_title,
        phone: user.phone,
        host_name: user.host_name,
        host_id_number: user.host_id_number,
        host_email: user.host_email,
        guest_email: user.guest_email,
        building_location: user.building_location,
        access_expiration: user.access_expiration
      }
    };
    res.status(200).json(response);
  } else {
    const response = {
      code: 1,
      message: 'User does not exist'
    };
    res.status(200).json(response);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
