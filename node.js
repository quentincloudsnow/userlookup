const express = require('express');
const app = express();
const data = require('./data.json'); // Assuming data.json is in the same directory
//begin quentin custom
const cors = require('cors');
app.use(cors({
    origin: 'https://quentincloudsnow.github.io'
}));
//end quentin custom
app.get('/checkUser', (req, res) => {
  const { username } = req.query;
  const userExists = data.some(user => user.username === username);
  if (userExists) {
    res.status(200).json({ message: 'User exists' });
  } else {
    res.status(404).json({ message: 'User does not exist' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
