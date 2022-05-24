const express = require('express');
const path = require('path');

const app = express();

const joinedPath = path.join(__dirname, 'public');

const exStatic = express.static(joinedPath);

app.use(exStatic);

app.listen(3000, () => {
  console.log('Server is watching on port 3000');
});
