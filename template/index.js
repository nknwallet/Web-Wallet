const express = require('express');
const { join } = require('path');
const fetch = require('node-fetch');

const app = express();

app.use('/static', express.static(join(__dirname, '/static')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/request', (req, res) => {
  fetch(req.query.redirect, { method: req.query.method || 'GET' })
    .then(resp => resp.json())
    .then((data) => {
      res.json({ data });
    });
});

app.use((req, res) => {
  res.sendFile(join(__dirname, '/index.html'));
});

const PORT = process.env.NODE_PORT || 6060;
app.listen(PORT, () => {
  console.log('server is listening at ', PORT);
});
