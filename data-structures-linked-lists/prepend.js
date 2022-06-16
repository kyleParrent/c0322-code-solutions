/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newL = new LinkedList(value);
  newL.next = list;
  return newL;
}
