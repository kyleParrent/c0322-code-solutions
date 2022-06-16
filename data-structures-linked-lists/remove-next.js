/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const remain = list.next.next;
  list.next = remain;
}
