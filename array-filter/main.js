const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evens = numbers.filter(numbers => numbers % 2 === 0);
console.log(`These are the even numbers: ${evens}`);

const overFive = numbers.filter(numbers => numbers > 5);
console.log(`These numbers are over five: ${overFive}`);

const startWithE = names.filter(name => name[0] === 'E');
console.log(`These are the names that start with E: ${startWithE}`);

const containD = names.filter(name => name.includes('d') || name.includes('D'));
console.log(`These are the names that include D or d: ${containD}`);
