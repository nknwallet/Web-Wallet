const express = require('express');
const { join } = require('path');
const secure = require('express-force-https');

const app = express();

app.use('/static', express.static(join(__dirname, '/static')));

app.use((req, res) => {
  res.sendFile(join(__dirname, '/index.html'));
});

app.use(secure);

const PORT = process.env.NODE_PORT || 80;
app.listen(PORT, () => {
  console.log('server is listening at ', PORT);
});
