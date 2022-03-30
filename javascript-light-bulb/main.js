
var click = false;
var light = document.querySelector('.light');
var back = document.querySelector('.container');
var all = document.querySelector('body');

function lightSwitch(event) {
  if (click === true) {
    light.className = 'light-off';
    all.className = 'black';
    back.className = 'container-black';
    click = false;
  } else {
    light.className = 'light';
    all.className = 'white';
    back.className = 'container';
    click = true;
  }
}

light.addEventListener('click', lightSwitch);
