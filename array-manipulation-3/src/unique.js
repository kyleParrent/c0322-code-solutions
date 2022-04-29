/* exported unique */

function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (newArr.includes(array[i]) === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// input: [the , word, hello, the, hello]
// output: [the, word, hello]

// create a varibel for array values
// create a for loop that goes through the array
// have an if statment that thecks if the value at the current index is inclued in the new array
// if false then push the current value to the new array
// once the for loop finishes return the new array from the funcction
