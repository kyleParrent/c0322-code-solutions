var click = false;
var overL = document.querySelector('.overlay');
var pop = document.querySelector('.pop');
var openB = document.querySelector('.open-button');
var closeB = document.querySelector('.close-button');

function popUp(event) {
  if (click === false) {
    overL.className = 'overlay';
    pop.className = 'pop';
    openB.className = 'open-button';
    click = true;
  } else {
    overL.className = 'overlay-on';
    pop.className = 'pop-on';
    openB.className = 'open-button-off';
    click = false;
  }
}

closeB.addEventListener('click', popUp);
openB.addEventListener('click', popUp);
