function handleFocus(event) {
  console.log('focus event fired');
  console.log('Event name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('Event name: ', event.target.name);
}

function handleInput(event) {
  console.log('Event name: ', event.target.name);
  console.log('Event value: ', event.target.value);
}

var inputE = document.querySelectorAll('input');
var textA = document.querySelector('textarea');

textA.addEventListener('focus', handleFocus);
textA.addEventListener('input', handleInput);
textA.addEventListener('blur', handleBlur);
inputE[1].addEventListener('focus', handleFocus);
inputE[1].addEventListener('input', handleInput);
inputE[1].addEventListener('blur', handleBlur);
inputE[0].addEventListener('focus', handleFocus);
inputE[0].addEventListener('input', handleInput);
inputE[0].addEventListener('blur', handleBlur);
