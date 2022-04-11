/* exported invert */

function invert(source) {
  var newObj = {};
  for (var x in source) {
    var newProp = source[x];
    newObj[newProp] = x;
  }
  return newObj;
}

// input: {'word': 'happy', 'name': 'dave'}
// output: {'happy': 'word', 'dave': 'name'}

// first cretae a new object to contain the invert
// create a for in loop that takes the value of the propeert x and puts it in a variable
// make that variable a new object property with x as the value.
// return the new object
