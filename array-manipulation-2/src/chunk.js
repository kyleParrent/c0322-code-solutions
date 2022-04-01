/* exported chunk */

function chunk(array, size) {
  var newSmallArr = [];
  var newArr = [];
  if (size > array.length) {
    for (var i = 0; i < array.length; i++) {
      newArr.push(array[i]);
    }
  } else {
    for (var ii = 0; ii < size; ii++) {
      newSmallArr.push(array[i]);
    }
  }
  newArr.push(newSmallArr);
  newArr = [];
}
