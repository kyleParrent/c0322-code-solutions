/* exported includes */

function includes(list, value) {
  if (list.data === value) {
    return true;
  }
  let newList = list.next;
  while (newList !== null) {
    if (newList.data === value) {
      return true;
    }
    newList = newList.next;
  }
  return false;
}
