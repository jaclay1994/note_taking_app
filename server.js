// Dependencies
const http = require('http')
const fs = require('fs')
const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require('./routes/apiNotes')(app);
require('./routes/htmlRoutes')(app);





// Create New Characters - takes in JSON input
app.post('/api/characters', (req, res) => {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
  const newcharacter = req.body;

  console.log(newcharacter);

//   // We then add the json the user sent to the character array
  characters.push(newcharacter);

//   // We then display the JSON to the users
  res.json(newcharacter);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
