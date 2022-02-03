// start a express web server
const express = require('express');
const server = express();
server.listen(4000, () => console.log('Backend running on port 4000.'));

// test route to see that the vite proxy to backend works
server.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend! I think the world is wonderful too!' });
});

// serve the built project (the dist folder)
const path = require('path');
server.use(express.static(path.join(__dirname, '../', 'dist')));
// important for frontend routes (react router) to work
// if a route / url does not correspond to a file in dist
// then serve the index.html file from the dist folder
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist', 'index.html'))
});