// server.js
const express = require('express');
const path = require('path');
const app = express();
const dns = require('node:dns');
const os = require('node:os');

const options = { family: 4 };


// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle requests for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});

dns.lookup(os.hostname(), options, (err, addr) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`http://${addr}:${PORT}`);
    }
});
