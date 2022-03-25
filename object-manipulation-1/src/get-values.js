/* exported getValues */

function getValues(object, key) {
  var values = [];
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}

// input: {word1: 'yo', word2: 'no'}
// output: ['yo', 'no']

// create a new variable with an empty array assigned
// create a for in statement that targets the key given in the given object
// push those values to the new array
// return the new array from the function
