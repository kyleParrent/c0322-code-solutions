/* exported pick */

function pick(source, keys) {
  var newObj = {};
  for (var x in source) {
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i] && source[keys[i]] !== undefined) {
        newObj[x] = source[keys[i]];
      }
    }
  }
  return newObj;
}

// input: {key1: 0, key2: 5} [key1]
// output: {key1: 0}

// create a new variable for an empty object
// create a for in statement to loop through source
// create a for loop to look through keys
// create a condition that says if the current key equals the current property and is not undefined
// in the code block add the current property to the new object and assign it the value from source
// return the new object from the function
