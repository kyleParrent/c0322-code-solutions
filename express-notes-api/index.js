const express = require('express');
const fs = require('fs');
const notesObj = require('./data.json');

const app = express();
const notes = notesObj.notes;
const newNextId = notesObj.nextId;

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const x in notes) {
    notesArr.push(notes[x]);
  }
  res.json(notesArr);
});

app.listen(3000, () => {
  process.stdout.write('Server is watching on port 3000!');
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if ((id % 1) !== 0 || id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (notes[id] === undefined) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    const selectedNotes = notes[id];
    res.json(selectedNotes);
  }
});

const expressJson = express.json();
app.use(expressJson);

app.post('/api/notes', (req, res) => {
  notes[newNextId] = req.body;
  if (notes[newNextId].content === undefined) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    notes[newNextId].id = newNextId;
    notesObj.nextId++;
    fs.writeFile('./data.json', JSON.stringify(notesObj, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occurred' });
      } else {
        res.send(notes[newNextId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if ((id % 1) !== 0 || id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (notes[id] === undefined) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    delete notes[id];
    fs.writeFile('./data.json', JSON.stringify(notesObj, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occurred' });
      } else {
        res.sendStatus(204);
      }
    });
  }
}
);

app.put('/api/notes/:id', (req, res) => {
  let id = req.params.id;
  if (req.body.content === undefined) {
    res.status(400).send({ error: 'content is a required field' });
  } else if ((id % 1) !== 0 || id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (notes[id] === undefined) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    id = parseInt(id);
    notes[id] = req.body;
    notes[id].id = id;
    fs.writeFile('./data.json', JSON.stringify(notesObj, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occurred' });
      } else {
        res.send(notes[id]);
      }
    });
  }
}
);
