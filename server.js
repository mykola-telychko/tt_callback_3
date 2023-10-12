const express = require('express');
const app = express();
// cli 
// npm init -y
// npm install express --save

// Define a list of users (replace this with your user data)
const users = [
  { id: 1, name: 'Arestovich Pituh' },
  { id: 2, name: 'Datsuik Osel' },
  { id: 3, name: 'Podoliak Baran' },
];

// Create a route to return the list of users as JSON

// fix CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// http://localhost:3000/users
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
