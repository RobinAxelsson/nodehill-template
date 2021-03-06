// start a express web server
const express = require('express');
const server = express();
server.listen(4000, () => console.log('Backend running on port 4000.'));

// route returningn mock product data
const mockProducts = require('./mock-products.json');
server.get('/api/products', (req, res) => {
  res.json(mockProducts);
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