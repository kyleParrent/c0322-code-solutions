/* exported flatten */

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var newSmallArr = array[i];
      for (var y = 0; y < newSmallArr.length; y++) {
        newArr.push(newSmallArr[y]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// input [true, false, [true, [false]]]
// output [true, false, true, [false]]

// create a new varible to hold the new array indexs
// create a for loop that moves over the given array
// create an if statement that checks if the currenbt index is an array
// if it is then push it into a new varible
// loop over that new varible to push earch index into the new array
// create an else that just pushes the current index into the new array if its not an array
// return the array from the function
