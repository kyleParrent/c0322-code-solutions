var student = {
  firstName: 'kyle',
  lastName: 'parrent',
  age: 24
};

var fullName = student.firstName + student.lastName;

console.log('student full name: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'deli';

console.log('lives in irvine?: ', student.livesInIrvine);
console.log('previous occupation: ', student.previousOccupation);

var vehicle = {
  make: 'ford',
  model: 'mustang',
  year: 1969
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('vehicle color: ', student['color']);
console.log('is it a convertible?: ', student['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'clifford',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
