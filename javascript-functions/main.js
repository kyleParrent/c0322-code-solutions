function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsS = convertMinutesToSeconds(5);
console.log('One minute to seconds: ', convertMinutesToSecondsS);

function greet(name) {
  return 'Hey, ' + name;
}

var greeting = greet('Beavis');
console.log('Greeting: ', greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var myarea = getArea(17, 42);
console.log('value of area: ', myarea);

function getFirstName(person) {
  var theFirstName = person.firstName;
  return theFirstName;
}

var myName = { firstName: 'Lelouche', lastName: 'Lamperouge' };
var myFirstName = getFirstName(myName);
console.log('first name of person: ', myFirstName);

function getLastElement(array) {
  var aLast = array.length - 1;
  return array[aLast];
}

var myArray = ['propane', 'and', 'propane', 'accessories'];
var myLast = getLastElement(myArray);
console.log('array last index: ', myLast);
