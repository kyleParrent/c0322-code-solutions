/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var empty = [];
  for (var i = 0; i < words.length; i++) {
    empty.push(words[i] + suffix);
  }
  return empty;
}
