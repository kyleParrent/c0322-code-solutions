const plus = require('./add');
const minus = require('./subtract');
const times = require('./multiply');
const over = require('./divide');

if (process.argv[3] === 'plus') {
  const x = parseInt(process.argv[2]);
  const y = parseInt(process.argv[4]);
  console.log(plus(x, y));
} else if (process.argv[3] === 'minus') {
  const x = parseInt(process.argv[2]);
  const y = parseInt(process.argv[4]);
  console.log(minus(x, y));
} else if (process.argv[3] === 'over') {
  const x = parseInt(process.argv[2]);
  const y = parseInt(process.argv[4]);
  console.log(over(x, y));
} else if (process.argv[3] === 'times') {
  const x = parseInt(process.argv[2]);
  const y = parseInt(process.argv[4]);
  console.log(times(x, y));
}
