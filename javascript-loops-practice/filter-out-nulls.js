/* exported filterOutNulls */

function filterOutNulls(values) {
  var newV = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      newV.push(values[i]);
    }
  }
  return newV;
}
