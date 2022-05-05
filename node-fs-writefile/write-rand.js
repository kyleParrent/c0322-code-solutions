const fs = require('fs');
const data = JSON.stringify(Math.random()) + '\n';

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
