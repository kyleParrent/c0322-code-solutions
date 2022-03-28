function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var event = document.querySelector('.click-button');

event.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var event2 = document.querySelector('.hover-button');

event2.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var event3 = document.querySelector('.double-click-button');

event3.addEventListener('dblclick', handleDoubleClick);
