const express = require('express');

const app = express();

let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr);
});

app.listen(3000, () => {
  process.stdout.write('Server is watching!');
});

const expressJson = express.json();

app.use(expressJson);

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.send(grades);
});
