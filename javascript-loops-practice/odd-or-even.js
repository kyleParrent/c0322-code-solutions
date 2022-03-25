/* exported oddOrEven */

function oddOrEven(numbers) {
  var empty = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      empty.push('even');
    } else {
      empty.push('odd');
    }
  }
  return empty;
}
