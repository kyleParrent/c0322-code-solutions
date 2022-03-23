var num1 = 7;
var num2 = 9;
var num3 = 13;

var maximumValue = Math.max(num1, num2, num3);
console.log('The maximum value is: ', maximumValue);

var heroes = ['Blade', 'Judge Dredd', 'Iron Man', 'Air Bud'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('This is random: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('This hero is random: ', randomHero);

var library = [{ title: 'Adventures of Tom Sawyer', author: 'Mark Twain' },
  { title: 'Ben Hur', author: 'Lewis Wallace' },
  { title: 'Alice in Wonderland', author: 'Lewis Carrol' }];
var lastBook = library.pop();
console.log('Value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);

var fullName = 'Kyle Parrent';
var firstAndLastName = fullName.split(' ');
console.log('First and last name: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name: ', sayMyName);
