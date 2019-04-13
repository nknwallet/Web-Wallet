const express = require('express');
const { join } = require('path');

const app = express();

app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

app.use('/static', express.static(join(__dirname, '/static')));

app.use((req, res) => {
  res.sendFile(join(__dirname, '/index.html'));
});

const PORT = process.env.NODE_PORT || 6060;
app.listen(PORT, () => {
  console.log('server is listening at ', PORT);
});
