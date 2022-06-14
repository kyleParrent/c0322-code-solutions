/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxVal = stack.pop();
  while (stack.peek() !== undefined) {
    const compare = stack.pop();
    if (maxVal < compare) {
      maxVal = compare;
    }
  }
  return maxVal;
}
