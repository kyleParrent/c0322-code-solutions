/* exported getKeys */

function getKeys(object) {
  var values = [];
  for (var x in object) {
    values.push(x);
  }
  return values;
}

// input: { name: 'Tom' , favColor: 'blue'}
// output: [name, favColor]

// create a new variable with an empty array assigned
// create a for in statement that targets the keys in the given object
// push those values to the new array
// return the new array from the function
