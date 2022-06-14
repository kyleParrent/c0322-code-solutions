/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return stack.peek();
  }
  const topValue = stack.pop();
  if (stack.peek() === undefined) {
    return stack.push(topValue);
  } else {
    const secValue = stack.peek();
    stack.push(topValue);
    return secValue;
  }
}
