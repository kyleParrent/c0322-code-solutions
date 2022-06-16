/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const remain = list.next;
  const l = new LinkedList(value);
  list.next = l;
  list.next.next = remain;
  return list;
}
