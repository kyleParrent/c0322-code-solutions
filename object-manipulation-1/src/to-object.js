/* exported toObject */

function toObject(keyValuePair) {
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}

// input: ['word', 'hello']
// output: {word: 'hello'}

// create a new varible with an empty object
// assign the new objects key to the 0 index in the array given and
// assign the value to the 1 index in the array given
