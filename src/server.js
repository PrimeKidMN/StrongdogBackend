const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory inside 'src'
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve the index.html file for all requests
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
