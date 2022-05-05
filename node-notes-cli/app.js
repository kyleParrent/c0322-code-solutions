const theObj = require('./data.json');
const fs = require('fs');

const theNotes = theObj.notes;
const action = process.argv[2];

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  if (action === 'read') {
    for (const x in theNotes) {
      const currentNote = theNotes[x];
      console.log(`${x}: ${currentNote}`);
    }
  }
});

if (action === 'create') {
  const note = process.argv[3];
  const newId = theObj.nextId;
  theNotes[newId] = note;
  theObj.nextId++;
}
if (action === 'update') {
  const index = process.argv[3];
  const newNote = process.argv[4];
  theNotes[index] = newNote;
}
if (action === 'delete') {
  const deleteIndex = process.argv[3];
  delete theNotes[deleteIndex];

}

fs.writeFile('./data.json', JSON.stringify(theObj, null, 2), err => {
  if (err) return console.log(err);
});
