const takeAChance = require('./take-a-chance');

const takeAName = takeAChance('Kyle');

takeAName.then(string => {
  console.log(string);
}, error => {
  console.log(error.message);
});
