const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log('This is the sum of all values: ', sum);

const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log('This is the product of all values: ', product);

const initialValue = 0;
const balance = account.reduce((previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    previousValue += currentValue.amount;
    return previousValue;
  } else {
    previousValue -= currentValue.amount;
    return previousValue;
  }
}, initialValue);

console.log('This is the balance of all accounts: ', balance);

const composite = traits.reduce((previousValue, currentValue) => {
  previousValue = Object.assign(previousValue, currentValue);
  return previousValue;
});
console.log('This is the created object: ', composite);
