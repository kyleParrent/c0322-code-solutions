const express = require('express');

const app = express();

let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  console.log('Server is watching!');
});

const expressJson = express.json();

app.use(expressJson);

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.send('It worked?');
});
