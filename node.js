const express = require('express');
const app = express();
const data = require('./data.json'); // Assuming data.json is in the same directory
//ADDED CORS CONFIG

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://quentincloudsnow.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// ... rest of your app's routes and logic


app.get('/checkUser', (req, res) => {
          const { username } = req.query;
          const userExists = data.some(user => user.username === username);
          if (userExists) {
                      res.status(200).json({ message: 'User exists' });
                    } else {
                                res.status(200).json({ message: 'User does not exist' });
                              }
});

app.listen(3000, () => {
          console.log('Server is running on port 3000');
});
