/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const secondL = list.next;
  const remain = secondL.next;
  secondL.next = list;
  secondL.next.next = remain;
  return secondL;
}
