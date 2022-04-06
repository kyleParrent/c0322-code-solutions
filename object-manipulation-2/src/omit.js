/* exported omit */

function omit(source, keys) {
  var i = 0;
  for (var x in source) {
    if (x === keys[i]) {
      delete source[x];
      i++;
    }
  }
  return source;
}
