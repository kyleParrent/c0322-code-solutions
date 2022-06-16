/* exported getTail */

function getTail(list) {
  let originalList = list;
  while (originalList.next !== null) {
    originalList = originalList.next;
  }
  const lastVal = originalList.data;
  return lastVal;
}
