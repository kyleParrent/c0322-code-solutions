/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return;
  }
  let newList = list;
  while (newList.next.next !== null) {
    newList = newList.next;
  }
  newList.next = null;
  return newList;
}
