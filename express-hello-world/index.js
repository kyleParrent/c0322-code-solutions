const express = require('express');

const app = express();

app.use(function (req, res) {
  res.send('DONT LOOK!!');
});

app.listen(3000, () => {
  console.log('Server is watching!');
});
