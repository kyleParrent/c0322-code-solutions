/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack;
  }
  const topValue = stack.pop();
  stack.push(value);
  stack.push(topValue);
  return stack;
}
