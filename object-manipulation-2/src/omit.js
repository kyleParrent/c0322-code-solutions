/* exported omit */

function omit(source, keys) {
  var newObj = {};
  for (var x in source) {
    var isFound = null;
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i]) {
        isFound = true;
      }
    }
    if (isFound === null) {
      newObj[x] = source[x];
    }
  }
  return newObj;
}

// input: {key1: 0, key2: 4, key3: 9} [key2, key1]
// output: {key3: 9}

// create a new empty object and assign it a variable
// create a for in statement to loop through source
// create a varible and set it equal to null, this is for if the object is found
// create a for loop to look through the keys
// if the key is equal to the current property then set the varible to true for finding it
// in the for in loop have a condition that sees if the variable for if the key is found has changed
// if not then add that property to the new object
// return the new object from the function
