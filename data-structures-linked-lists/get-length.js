/* exported getLength */

function getLength(list) {
  let count = 1;
  let originalList = list;
  while (originalList.next !== null) {
    originalList = originalList.next;
    count++;
  }
  return count;
}
