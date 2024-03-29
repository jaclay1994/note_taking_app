// DEPENDENCIES
// We need to include the path package to get the correct file path for our html90
const path = require('path');



// ROUTING

module.exports = (app) => {
  // => HTML GET Requests 
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  })
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });
  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  
};