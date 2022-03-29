
var clicks = 0;
var light = document.querySelector('.light');
var back = document.querySelector('.container');
var all = document.querySelector('body');

function lightSwitch(event) {
  clicks++;
  if ((clicks % 2) === 0) {
    light.className = 'light-off';
    all.className = 'black';
    back.className = 'container-black';
  } else {
    light.className = 'light';
    all.className = 'white';
    back.className = 'container';
  }
}

light.addEventListener('click', lightSwitch);
